import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            isConnected = true;
            console.log('MongoDB is connected');
            
        } catch (error) {
            console.log(error);
        }
    }
})

export { handler as GET, handler as POST }