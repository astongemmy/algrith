import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import NextAuth from 'next-auth';

const authOptions = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     // const response = await axios.post(
  //     //   'http://localhost:9000/v1/auth/userExists',
  //     //   { email: profile.email }
  //     // );
  //     // if (response && response.data?.value === true) {
  //     //   // user exists return true passing control to the next callback
  //     //   return true;
  //     // } else {
  //     //   // second axios call which creates a new user in our database
  //     //   const data = {
  //     //     firstName: profile.given_name,
  //     //     lastName: profile.family_name,
  //     //     email: profile.email,
  //     //     profileUrl: profile.picture,
  //     //   };
  //     //   const response = await axios.post(
  //     //     "http://localhost:9000/v1/auth/signup",
  //     //     data
  //     //   );
  //     //   // retruns true thereby passing control to the next callback
  //     //   return true;
  //     // }
  //     return true;
  //   },
  //   async session({ session, token, user }) {
  //     return { ...session, accessToken: token.accessToken };
  //   },
  //   async jwt({ token, user, account }) {
  //     if (account) token.accessToken = account.access_token
  //     return token;
  //   }
  // },
  providers: [
    // Google({
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   clientId: process.env.GOOGLE_CLIENT_ID
    // }),
    Credentials({
      async authorize(credentials, req) {
        // console.log('NOW IS WELL ', credentials);
        // const response = await fetch('/your/endpoint', {
        //   body: JSON.stringify(credentials),
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
        
        // const user = await response.json()
        
        // if (response.ok && user) return user;
        
        // return null;
        return {
          name: 'John Doe',
          // email: credentials.email,
          pic: '/some/pic.png'
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/login',
  }
});

export default authOptions;