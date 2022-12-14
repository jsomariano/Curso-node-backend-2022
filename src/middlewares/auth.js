import jwt from 'jsonwebtoken';

function authMiddleware(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .send({ message: 'Não possui permissão para acessar este recurso.' });
  }

  const tokenReplaced = token.replace('Bearer ', '');

  return jwt
    .verify(tokenReplaced, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) next(error);

      request.usuario = decoded;
      next();
    });
}

export default authMiddleware;
