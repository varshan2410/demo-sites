# Architecture

This repository is one Next.js application that serves three customer demos:

- /clinic
- /hotel
- /restaurant

Each business owns a typed configuration under config/. Configuration supplies its content, contact data, brand tokens, hero image, navigation, products/services and booking values. Shared elements such as the site shell, footer, theme toggle and WhatsApp button never contain a business name or price.

Business-specific user journeys intentionally use purpose-built components. A clinic appointment, hotel availability enquiry and restaurant order are different tasks; treating them as one generic form would reduce clarity. They share the same visual primitives and config-first approach.

## Form behaviour

Forms use browser validation and generate demo references on the client. They do not claim to be production booking engines. Each flow shows a confirmation and produces a context-specific WhatsApp handoff.

## Offline strategy

The service worker caches the application shell and previously visited pages. When the network is unavailable it serves cached content or an offline notice. Submissions are not persisted to a server in this demo.
