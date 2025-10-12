import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log(`Seeding ...`);

  await prisma.contact.deleteMany();

  const contactsToCreate = 15; //Criar 15 contatos de exemplo

  for (let i = 0; i < contactsToCreate; i++) {
    const contact = await prisma.contact.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        phone: faker.phone.number(),
      },
    });
    console.log(`criar contact com id: ${contact.id}`);
  }

  console.log(`Seeding completa.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
