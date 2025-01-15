# Jquery-UI-Widgets

## Skills Form with jQuery UI Widgets

## Concepts Covered

- Implementing autocomplete functionality for input fields using jQuery UI.
- Adding a datepicker to input fields to enhance user experience when selecting dates.
- Using jQuery to dynamically update and manage form submissions.

## Learning Objectives

- Learn how to apply the **autocomplete widget** to an input field using jQuery UI, allowing users to pick from a predefined list of skills.
- Understand how to integrate the **datepicker widget** for selecting dates, enabling users to choose dates from a calendar UI instead of manually typing them.
- Dynamically capture and process form input, and append the submitted data to a list.

## Features

- **Autocomplete for Skills**: Users can type in the "Skill Name" input field, which will suggest a list of skills from a predefined array using the jQuery UI Autocomplete widget. This makes it easier for users to select a skill without having to type the entire name.
- **Datepicker for Date Selection**: The "Date" input field includes a jQuery UI datepicker, allowing users to select a date from a calendar widget instead of manually entering the date. This feature also enables users to choose both the month and year.
- **Dynamic Form Submission**: Upon submission, the form captures the skill name and date entered by the user, and appends the data to a list in real-time, formatted with Bootstrap’s list group styles.
- **Form Reset**: After successfully submitting the form, the input fields are automatically cleared, ready for new entries.

## Implementation Details

- **Autocomplete Widget**: A predefined list of skills (e.g., JavaScript, Python, React) is used to populate the suggestions in the autocomplete widget for the "Skill Name" input field. Users can select a skill from this list or type a new one.
- **Datepicker Widget**: The datepicker widget is applied to the "Date" input field, which allows users to choose a date, while also giving the option to navigate between months and years.

## How It Works

1. **Form Submission**: Users enter a skill and select a date, then click the "Submit" button.
2. **Input Validation**: The form checks if both fields are filled before submission. If either field is empty, the form is not submitted.
3. **Display of Submitted Skills**: The submitted skill and date are displayed as list items in a Bootstrap-styled list on the page.
4. **Widgets**: The autocomplete widget suggests skills from a predefined list, while the datepicker allows easy date selection.

## Summary

This project demonstrates the use of jQuery UI widgets to enhance user experience in a web form. Users can select skills via an autocomplete feature and pick dates using a datepicker, simplifying the process of form submission. The form dynamically displays the submitted data in a Bootstrap-styled list, showcasing how to integrate jQuery UI with Bootstrap for an intuitive and responsive form interface.
