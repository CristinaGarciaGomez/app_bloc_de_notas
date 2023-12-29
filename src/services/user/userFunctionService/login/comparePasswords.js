//MÓDULO DE COMPARACIÓN DE CONTRASEÑA

//Imports necesarios
import bcrypt from 'bcrypt';

export default async function comparePasswords(providedPassword, storedPassword) {
  return await bcrypt.compare(providedPassword, storedPassword);
}