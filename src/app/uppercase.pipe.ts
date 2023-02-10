import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'checkAdminUser' })

export class CheckAdminUserPipe implements PipeTransform {
  transform(user: any): boolean {
    return user.isAdmin;
  }
}
