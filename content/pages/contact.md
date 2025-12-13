---
title: Contact
description: "Contact us"
layout: base.njk
---

## Say hello

contact the American Indian Law Alliance via [contact](https://aila.ngo/contact)

<form action="/pages/contact" method="POST" enctype="multipart/form-data">
	<label for="contact-name">Name</label>
	<input id="contact-name" name="name" type="text" autocomplete="name" required>

	<label for="contact-email">Email</label>
	<input id="contact-email" name="email" type="email" autocomplete="email" required>

	<label for="contact-subject">Subject</label>
	<input id="contact-subject" name="subject" type="text" required>

	<label for="contact-note">Note</label>
	<textarea id="contact-note" name="note" rows="6" required></textarea>

	<label for="contact-accent">What is the accent color on the website?</label>
	<input id="contact-accent" name="accent-color" type="text" pattern="([Yy]ellow|#f{2}[bB]300)" title="Type yellow or #ffb300" placeholder="Hint: it’s the #ffb300 yellow" required>
	

	<button type="submit">Send message</button>
</form>
