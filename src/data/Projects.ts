import type { Project } from '../interfaces/Projects';
import { tags } from './Tags';

export const PROJECTS: Project[] = [
  {
    title: 'Wellness',
    description:
      'Tailored wellness center system efficiently manages exercise routines, tracks customer progress, and generates detailed graphs. Implements advanced email notifications for routine delivery, ensures security with double authentication via OKTA, and utilizes identification card readers for enhanced security.',
    image: '/Wellness.webp',
    tags: [tags.Laravel, tags.React, tags.Bootstrap, tags.SQLServer, tags.Okta],
  },
  {
    title: 'Construction Ultrapark',
    description:
      'The web system for civil engineering simplifies material management with direct warehouse routing and automated email notifications. It employs SAP data for accurate inventory tracking, and features a Progressive Web App (PWA) for device independence, improving accessibility and operational flexibility.',
    image: '/Construction.webp',
    tags: [
      tags.Laravel,
      tags.React,
      tags.TypeScript,
      tags.Bootstrap,
      tags.SQLServer,
      tags.Okta,
    ],
  },
  // {
  //   title: 'Deprag Automation',
  //   description:
  //     'Deprag Automation System was automated to obtain values automatically from equipment, streamlining pass/fail determination. Implemented robust validations and enhanced security measures not only expedited the process but also addressed and mitigated outdated vulnerabilities.',
  //   image: '/Deprag.webp',
  //   tags: [tags.CSharp, tags.DotNet, tags.DevExpress, tags.SQLServer],
  // },
  // {
  //   title: 'Impedance System',
  //   description:
  //     'Project involves effective communication with an impedance measurement device to obtain values and determine pass/fail statuses using advanced algorithms and curve analysis. It incorporates calibration and verification modules, ensuring security measures and alarm systems for a comprehensive and efficient solution.',
  //   image: '/Impedance.webp',
  //   tags: [tags.CSharp, tags.DotNet, tags.DevExpress, tags.SQLServer],
  // },
  // {
  //   title: 'Hipot Electrical System',
  //   description:
  //     'Project that interfaces with an electrical measurement device, determining pass/fail outcomes. It employs a recipe manager for seamless equipment operation and features modules for historical data, alarms, security, configuration, and external service connections to manage traceability effectively.',
  //   image: '/Hipot.webp',
  //   tags: [tags.CSharp, tags.DotNet, tags.DevExpress, tags.SQLServer],
  // },
  //das
];
