//MÓDULO DE FUNCIONAMIENTO DE LOGEO DEL USUARIO

// Importamos las funciones del usuario.
import findUserByEmail from '../../../services/user/indexUserService.js';
import comparePasswords from '../../../services/user/indexUserService.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const loginController = async (req, res) => {
  // Extraemos datos del cuerpo de la solicitud
  const { email, password } = req.body;

  // Validamos que se proporcionen ambos campos: email y password
  if (!email || !password) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password) son requeridos.🔴'
    });
  }

  try {
    // Buscamos el usuario por email
    const user = await findUserByEmail(email);

    // Si encontramos el usuario y la contraseña coincide
    if (user && await comparePasswords(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return res.status(200).send({
        status: 'ok',
        message: 'Inicio de sesión exitoso.✅',
        token,
        userId: user.id,
        userName: user.userName
      });
    } else {
      // Si no se encontró un usuario o la contraseña no coincide
      res.status(401).send({
        status: 'error',
        message: 'Credenciales incorrectas.🔴'
      });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).send({
      status: 'error',
      message: 'Error interno del servidor al iniciar sesión.🔴'
    });
  }
};

/*const loginController = (req, res) => {
  // Extraemos datos del cuerpo de la solicitud
  const { email, password } = req.body;

  // Validamos que se proporcionen ambos campos: email y password
  if (!email || !password) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password) son requeridos.🔴'
    });
  }

  // Consultamos la base de datos para obtener el usuario por su email
  pool.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (error, results) => {
      if (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).send({
          status: 'error',
          message: 'Error interno del servidor al iniciar sesión.🔴'
        });
      }

      // Si se encontró un usuario con el email proporcionado
      if (results && results.length > 0) {
        const user = results[0];
        
        // Verificamos si la contraseña proporcionada coincide con la almacenada (usando bcrypt)
        const validPassword = await bcrypt.compare(password, user.password);
        
        if (validPassword) {
          // Generamos un token JWT para el usuario autenticado
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          
          return res.status(200).send({
            status: 'ok',
            message: 'Inicio de sesión exitoso.✅',
            token,
            userId: user.id,
            userName: user.userName
          });
        }
      }

      // Si no se encontró un usuario o la contraseña no coincide
      res.status(401).send({
        status: 'error',
        message: 'Credenciales incorrectas.🔴'
      });
    }
  );
};*/

//exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export default loginController ;



/* EJEMPLO STEFANO
const loginController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Login',
    data: {
      token: 'dfsgdrfgsdf',
    },
  });
};*/


