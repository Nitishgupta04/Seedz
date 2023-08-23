const ENV = {
  jwtSecret: process.env.JWT_SECRET,
  clientUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://seedz.vercel.app`,
  serverUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/graphql"
      : "https://seedz.vercel.app/api/graphql",
};

export default ENV;
