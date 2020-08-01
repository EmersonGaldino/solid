import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from '../../repositories/implmentations/PostgresUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUSerController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUSerController(createUserUseCase);

export { createUserUseCase, createUserController };
