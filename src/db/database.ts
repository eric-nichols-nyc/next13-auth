/**
 * import mongoose and export connection functio 
 */
import mongoose, { ConnectOptions } from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'user',
    } as ConnectOptions)
    .then((res) => {
      console.log(
        'Connected to Distribution API Database - Initial Connection'
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });

}