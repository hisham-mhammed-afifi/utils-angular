import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalService } from './shared/services/modal.service';

interface IData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  showModal = false;
  itemToDelete: IData = { name: '', description: '' };

  @ViewChild('templateModal') templateModal: any;

  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('another');
  }

  openModal(e: Event, name: string) {
    e.preventDefault();
    this.modal.toggleModal(name);
  }

  openDeleteModal(data: IData) {
    this.showModal = true;
    this.itemToDelete = data;
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy(): void {
    this.modal.unregister('another');
  }
}
