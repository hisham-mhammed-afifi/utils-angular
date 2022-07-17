import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [ModalComponent, ConfirmModalComponent],
  exports: [ModalComponent],
  imports: [CommonModule],
})
export class SharedModule {}
