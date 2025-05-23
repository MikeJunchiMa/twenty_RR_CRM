<br />
<p align="center">
  <a href="https://www.twenty.com">
    <img src="./packages/twenty-website/public/images/core/logo.svg" width="100px" alt="Twenty logo" />
  </a>
</p>

<h2 align="center" >The #1 Open-Source CRM </h2>

<p align="center"><a href="https://twenty.com">🌐 Website</a> · <a href="https://twenty.com/developers">📚 Documentation</a> · <a href="https://github.com/orgs/twentyhq/projects/1"><img src="./packages/twenty-website/public/images/readme/planner-icon.svg" width="12" height="12"/> Roadmap </a> · <a href="https://discord.gg/cx5n4Jzs57"><img src="./packages/twenty-website/public/images/readme/discord-icon.svg" width="12" height="12"/> Discord</a> · <a href="https://www.figma.com/file/xt8O9mFeLl46C5InWwoMrN/Twenty"><img src="./packages/twenty-website/public/images/readme/figma-icon.png"  width="12" height="12"/>  Figma</a></p>
<br />

<p align="center">
  <a href="https://www.twenty.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/preview-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/preview-light.png" />
      <img src="./packages/twenty-docs/static/img/preview-light.png" alt="Companies view" />
    </picture>
  </a>
</p>

## Automated contact capture

Automatically create contacts from emails or incoming calls using Outlook and RingCentral integrations.

## Calendar and task integration

Sync tasks with external calendars like Google or Outlook and receive reminders directly in Twenty.

## Opportunity stage automation

Trigger follow‑up tasks whenever an opportunity moves to a new stage.

## RFQ and quote tracking

Manage quotes with versioning and status updates.

## Analytics and dashboards

Visualize pipeline metrics and task completion rates with built‑in dashboards.

## Mobile accessibility

A simplified mobile interface keeps field reps productive on the go.

## Import & export enhancements

Bulk import and export records to streamline large data updates.

## Role-based permissions

Control who can view or modify records with fine‑grained permissions.

<br />

# Installation

See:
🚀 [Self-hosting](https://twenty.com/developers/section/self-hosting)
🖥️ [Local Setup](https://twenty.com/developers/local-setup)

## Offline setup

If your environment loses network access after the initial setup, make sure all
dependencies are installed beforehand. Run the script below while network access
is still available:

```bash
./scripts/setup-offline.sh
```

The script installs project dependencies with `yarn` and downloads Playwright
browsers used by the E2E tests. After running it, subsequent commands can execute
without requiring internet access.

# Does the world need another CRM?

We built Twenty for three reasons:

**CRMs are too expensive, and users are trapped.** Companies use locked-in customer data to hike prices. It shouldn't be that way.

**A fresh start is required to build a better experience.** We can learn from past mistakes and craft a cohesive experience inspired by new UX patterns from tools like Notion, Airtable or Linear.

**We believe in Open-source and community.** Hundreds of developers are already building Twenty together. Once we have plugin capabilities, a whole ecosystem will grow around it.

<br />

# What You Can Do With Twenty

We're currently developing Twenty's beta version.

Please feel free to flag any specific needs you have by creating an issue.

Below are a few features we have implemented to date:

- [Add, filter, sort, edit, and track customers](#add-filter-sort-edit-and-track-customers)
- [Create one or several opportunities for each company](#create-one-or-several-opportunities-for-each-company)
- [See rich notes tasks displayed in a timeline](#see-rich-notes-tasks-displayed-in-a-timeline)
- [Create tasks on records](#create-tasks-on-records)
- [Navigate quickly through the app using keyboard shortcuts and search](#navigate-quickly-through-the-app-using-keyboard-shortcuts-and-search)
- [Automated contact capture from email and calls](#automated-contact-capture)
- [Calendar and task syncing with reminders](#calendar-and-task-integration)
- [Opportunity stage automation](#opportunity-stage-automation)
- [RFQ and quote tracking](#rfq-and-quote-tracking)
- [Analytics dashboards](#analytics-and-dashboards)
- [Mobile access](#mobile-accessibility)
- [Bulk data import/export](#import-export-enhancements)
- [Role-based permissions](#role-based-permissions)

## Add, filter, sort, edit, and track customers:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/index-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/index-light.png" />
      <img src="./packages/twenty-docs/static/img/visualise-customer-light.png" alt="Companies view" />
    </picture>
</p>

## Create one or several opportunities for each company:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/kanban-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/kanban-light.png" />
      <img src="./packages/twenty-docs/static/img/follow-your-deals-light.png" alt="Opportunities view" />
    </picture>
</p>

## Track deals effortlessly with the email integration:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/emails-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/emails-light.png" />
      <img src="./packages/twenty-docs/static/img/emails-light.png" alt="Emails" />
    </picture>
</p>

## Tailor your data model to meet business needs:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/data-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/data-light.png" />
      <img src="./packages/twenty-docs/static/img/data-light.png" alt="Data model" />
    </picture>
</p>

## See rich notes displayed in a timeline:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/notes-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/notes-light.png" />
      <img src="./packages/twenty-docs/static/img/notes-light.png" alt="Rich notes" />
    </picture>
</p>

## Create tasks on records

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/tasks-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/tasks-light.png" />
      <img src="./packages/twenty-docs/static/img/create-tasks-light.png" alt="Tasks" />
    </picture>
</p>

## Navigate quickly through the app using keyboard shortcuts and search:

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/keyboard-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/keyboard-light.png" />
      <img src="./packages/twenty-docs/static/img/keyboard-dark.png" alt="Keyboard shortcuts" />
    </picture>
</p>

## Connect your CRM to all your tools through our APIs and Webhooks.

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/api-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/twentyhq/twenty/v0.12.0/packages/twenty-docs/static/img/api-light.png" />
      <img src="./packages/twenty-docs/static/img/api-light.png" alt="API" />
    </picture>
</p>

<br />

# Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [NestJS](https://nestjs.com/), with [BullMQ](https://bullmq.io/), [PostgreSQL](https://www.postgresql.org/), [Redis](https://redis.io/)
- [React](https://reactjs.org/), with [Recoil](https://recoiljs.org/), [Emotion](https://emotion.sh/) and [Lingui](https://lingui.dev/)

# Thanks

<p align="center">
  <a href="https://www.chromatic.com/"><img src="./packages/twenty-website/public/images/readme/chromatic.png" height="30" alt="Chromatic" /></a>
  <a href="https://greptile.com"><img src="./packages/twenty-website/public/images/readme/greptile.png" height="30" alt="Greptile" /></a>
  <a href="https://sentry.io/"><img src="./packages/twenty-website/public/images/readme/sentry.png" height="30" alt="Sentry" /></a>
  <a href="https://crowdin.com/"><img src="./packages/twenty-website/public/images/readme/crowdin.png" height="30" alt="Crowdin" /></a>
</p>

Thanks to these amazing services that we use and recommend for UI testing (Chromatic), code review (Greptile), catching bugs (Sentry) and translating (Crowdin).

# Join the Community

- Star the repo
- Subscribe to releases (watch -> custom -> releases)
- Follow us on [Twitter](https://twitter.com/twentycrm) or [LinkedIn](https://www.linkedin.com/company/twenty/)
- Join our [Discord](https://discord.gg/cx5n4Jzs57)
- Improve translations on [Crowdin](https://twenty.crowdin.com/twenty)
- [Contributions](https://github.com/twentyhq/twenty/contribute) are, of course, most welcome!
