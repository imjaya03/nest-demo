import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('tasks')
export class TasksController {
  tasks: string[] = [
    'Chant Hare Krishna',
    'Cook for Krishna',
    'Distribute Prasadam',
    'Read Gita',
  ];

  @Get('/')
  async getAllTasks(): Promise<string[]> {
    return this.tasks;
  }

  @Post('/')
  async createTask(@Body() body: any): Promise<string[]> {
    const { title } = { title: '' };
    this.tasks.push(title);
    return this.tasks;
  }
}
