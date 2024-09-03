export async function GET(req) {
    const users = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Doe'},
        {id: 3, name: 'John Smith'}
    ];

    return new Response(JSON.stringify(users))
}