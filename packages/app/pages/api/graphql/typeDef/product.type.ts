import gql from "graphql-tag";

const productTypeDef = gql`
  type Query {
    getProducts: Products
  }

  type Mutation {
    addProduct(payload: String!): AddProductMutOutput
  }

  # Beginning of  QUE/MUT Fields

  #   Create user mutation
  input AddProduct {
    name: String!
    category: ProductCategory!
    price: String!
    availableForRent: Boolean!
    rentingPrice: String!
    base64Image: String!
    description: String!
  }

  type AddProductMutOutput {
    success: Boolean
    msg: String!
  }

  enum ProductCategory {
    FARM_PRODUCE
    FARM_MACHINERY
  }

  #   End of QUE/MUT Fields

  type User {
    id: String
    email: String
    username: String
    fullname: String
    image: String
    role: Role
    deliveryAddress: [DeliveryAddress]
    transactions: [Transaction]
    wallet: Wallet
  }

  type Products {
    id: String
    userId: String
    name: String
    description: String
    quantity: Int
    price: Int
    currency: String
    type: String
    availableForRent: Boolean
    rentingPrice: Int
    images: ProductImage
    ratings: [ProductsRating]
  }

  type ProductImage {
    id: String
    hash: String
    url: String
    product: Products
  }

  type ProductsRating {
    id: String
    userId: String
    rate: Int
    product: Products
    user: User
  }
`;

export default productTypeDef;
