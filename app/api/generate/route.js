import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json()
        
        // Validate input
        if (!body.url || !body.shorturl) {
            return Response.json({
                success: false, 
                error: true, 
                message: 'URL and short URL are required'
            }, { status: 400 })
        }

        // Validate URL format
        try {
            new URL(body.url)
        } catch {
            return Response.json({
                success: false, 
                error: true, 
                message: 'Invalid URL format'
            }, { status: 400 })
        }

        const client = await clientPromise
        const db = client.db("bitlinks")
        const collection = db.collection("url")

        // Check if short URL already exists
        const doc = await collection.findOne({shorturl: body.shorturl})
        if (doc) {
            return Response.json({
                success: false, 
                error: true, 
                message: 'Short URL already exists! Please choose a different one.'
            }, { status: 409 })
        }

        // Insert new URL
        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            createdAt: new Date()
        })

        return Response.json({
            success: true, 
            error: false, 
            message: 'URL Generated Successfully',
            id: result.insertedId
        })
        
    } catch (error) {
        console.error('API Error:', error)
        return Response.json({
            success: false, 
            error: true, 
            message: 'Internal server error'
        }, { status: 500 })
    }
}