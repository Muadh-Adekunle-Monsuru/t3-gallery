export const authOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ token, req }) {
      const isLoggedIn = !!token;
      const isOnHomePage = req.nextUrl.pathname === "/";
      
      // Allow access to the home page
      if (isOnHomePage) {
        return true;
      }
      
      // Redirect to login page if not logged in and accessing other pages
      if (!isLoggedIn) {
        return false;
      }
      
      // Allow access if logged in
      return true;
    },
  },
  providers: [],
};

