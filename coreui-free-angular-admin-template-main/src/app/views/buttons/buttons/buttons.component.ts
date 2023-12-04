import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  currentTab: string = 'alarms';
  groupName: string = '';
  priority: string = '';
  description: string = '';
  showGroupingSection: boolean = false;
  showTextBox: boolean = false;
  noteText: string = ''; 

  setCurrentTab(tab: string) {
    this.currentTab = tab;
    this.showGroupingSection = false;
  }

  createGroup() {
    // Handle the creation of a group, e.g., send data to a service or perform necessary actions
    console.log('Creating Group:', this.groupName, this.priority, this.description);
    // Add logic to handle the group creation here
  }

  toggleGroupingSection() {
    this.showGroupingSection = !this.showGroupingSection;
    this.currentTab = 'grouping'; 
  }
  toggleTextBox() {
    this.showTextBox = !this.showTextBox;
  }
  saveNote() {
    // You can handle saving the note here (e.g., store it in an array or send it to a service)
    console.log('Saving Note:', this.noteText);

    // After saving, you might want to reset the text box and hide it
    this.noteText = '';
    this.showTextBox = false;
  }

  cancelNote() {
    // If the user decides to cancel, simply hide the text box
    this.showTextBox = false;
  }
}
