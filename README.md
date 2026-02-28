Sutex Website
This is the official website for Sutex, an Udyam registered IT startup specializing in web and mobile app development.

Email Integration Setup
The website uses EmailJS to handle form submissions without requiring a backend server. Follow these steps to set up the email functionality:

1. Create an EmailJS Account
Go to EmailJS and create an account
Verify your email address
2. Create an Email Service
In your EmailJS dashboard, go to "Email Services"
Click "Add New Service"
Choose your email provider (Gmail, Outlook, etc.)
Follow the instructions to connect your email account
3. Create Email Templates
You need to create two email templates:

Contact Form Template
Go to "Email Templates" in your EmailJS dashboard
Click "Create New Template"
Name it (e.g., "Contact Form")
Design your email template using these variables:
{{from_name}} - The name of the person contacting you
{{from_email}} - The email address of the person contacting you
{{phone_number}} - The phone number provided
{{message}} - The message content
Save the template and note the Template ID
Newsletter Template
Create another template for newsletter subscriptions
Name it (e.g., "Newsletter Subscription")
Design your email template using this variable:
{{subscriber_email}} - The email address of the subscriber
Save the template and note the Template ID
4. Update the Website Code
Open index.html in a code editor

Find this line near the top of the file:

emailjs.init("YOUR_PUBLIC_KEY");
Replace YOUR_PUBLIC_KEY with your EmailJS public key (found in Account > API Keys)

Find these lines in the JavaScript section:

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
and

emailjs.send('YOUR_SERVICE_ID', 'YOUR_NEWSLETTER_TEMPLATE_ID', templateParams)
Replace:

YOUR_SERVICE_ID with your EmailJS service ID
YOUR_TEMPLATE_ID with your contact form template ID
YOUR_NEWSLETTER_TEMPLATE_ID with your newsletter template ID
5. Test the Forms
After setting up EmailJS and updating the code, test all forms to make sure emails are being sent correctly:

Contact form
Main subscription form
Footer subscription form
Additional Information
The website is designed to be fully responsive
All form submissions use client-side validation
Success and error messages are displayed to users after form submission
