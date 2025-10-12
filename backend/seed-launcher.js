import { execSync } from "child_process";

try {
  execSync("tsx prisma/seed.ts", { stdio: "inherit" });
} catch (error) {
  console.error("Falha ao executar o script de seed:", error);
  process.exit(1);
}
