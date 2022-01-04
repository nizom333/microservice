import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

require("dotenv").config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
    /**
     * Create App
     **/
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule, { cors: true });


    /**
     * Create Swagger and Configuration
     **/
    const config = new DocumentBuilder()
        .setTitle("API documentation")
        .setDescription("Documentation REST API")
        .setVersion("1.0.0")
        .addTag("Nizom")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);


    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
