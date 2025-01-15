# Jquery-UI-Interactions

## Skills Form with Drag-and-Drop Sorting

## Concepts Covered

- Implementing drag-and-drop functionality using jQuery UI's **sortable** widget.
- Adding autocomplete and datepicker features to input fields using jQuery UI.
- Using jQuery to dynamically update and manage form submissions.

## Learning Objectives

- Learn how to apply the **sortable widget** to an unordered list, allowing users to drag and rearrange items.
- Understand how to use the **autocomplete widget** for skill selection and the **datepicker widget** for date input.
- Capture and validate form input, dynamically append entries to a list, and allow users to rearrange the list in real-time.

## Features

- **Drag-and-Drop Sorting**: Users can rearrange the list of skills by dragging and dropping list items. A placeholder will appear in the list to indicate where the dragged item will be placed.
- **Autocomplete for Skills**: The "Skill Name" input field suggests skills from a predefined list using jQuery UI's Autocomplete widget, allowing users to quickly select a skill.
- **Datepicker for Date Selection**: The "Date" input field uses jQuery UI's Datepicker widget to allow users to choose a date from a calendar.
- **Dynamic Form Submission**: When a user submits the form, the skill name and date are added to the skills list, which is dynamically displayed on the page.
- **Form Reset**: After submission, the form's input fields are automatically cleared, ready for new entries.

## Customization Details

- **jQuery UI Sortable**: The list of skills (`#skills-list`) is made sortable, allowing users to reorder skills by dragging them. The **sortable widget** provides a smooth drag-and-drop experience, and the placeholder (`ui-state-highlight`) helps visualize where the dragged item will be dropped.
- **Autocomplete Widget**: A predefined list of skills is used to populate the suggestions in the autocomplete widget for the "Skill Name" input field. This improves user experience by helping users pick from common skill names.
- **Datepicker Widget**: The datepicker is applied to the "Date" input field, allowing users to select dates through a graphical interface, simplifying the process of choosing a date.

## How It Works

1. **Form Submission**: Users can enter a skill and select a date, then click the "Submit" button.
2. **List Creation**: Submitted entries are dynamically added to a list using jQuery. The list items include the skill name and the selected date.
3. **Sortable List**: The list of submitted skills is made sortable using drag-and-drop functionality. Users can reorder the list by dragging items.
4. **Form Enhancements**: The form includes an autocomplete widget for skill entry and a datepicker for date selection, providing a better user experience.

## Summary

This project demonstrates how to integrate jQuery UI widgets, such as the **autocomplete** and **datepicker**, with dynamic form handling and drag-and-drop functionality. Users can submit skills, which are displayed in a sortable list, allowing them to rearrange the order of skills via drag-and-drop. The project showcases how to enhance a form with modern user interaction techniques while maintaining a responsive and interactive design.
