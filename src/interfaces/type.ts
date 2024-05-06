enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

interface ObjectLiteral {
  [props: string]: any;
}


export { Role, ObjectLiteral };
