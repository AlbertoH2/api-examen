import { Get, Controller, Render } from '@nestjs/common';

@Controller('index')
export class IndexController {
    @Get()
    @Render('index')
    root() {
        return {
            nombre: 'Jesus Alberto Garcia Montejo',
            semestre: '6° N'
        };
    }
}


