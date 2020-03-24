require('./megamenu.css');
require('../node_modules/@fortawesome/fontawesome-free/css/all.css');
require('@fortawesome/fontawesome-free/js/all');

const menuItems = [
    {
        text: 'Services',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-Services.png',
        children: [
            {
                text: 'All Services',
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.all%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        text: 'See All Services',
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Default.aspx'
                    }
                ]
            },
            {
                text: 'Development Teams',
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.webdev%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Web-Applications.aspx',
                        text: 'Web Applications',
                        description: 'Web Applications Development',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Consulting/Mobile-Application-Development.aspx',
                        text: 'Mobile Apps',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Angular.aspx',
                        text: 'Angular',
                        description: 'Angular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/React.aspx',
                        text: 'React',
                        description: 'React'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Vuejs.aspx',
                        text: 'VueJS',
                        description: 'VueJS'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Database-Development.aspx',
                        text: 'Database Development'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Enterprise-Reporting.aspx',
                        text: 'Enterprise Reporting &amp; BI',
                        description: 'Enterprise Reporting + BI'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Power-BI.aspx',
                        text: 'Power BI',
                        description: 'Power BI'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Desktop-Development.aspx',
                        text: 'Windows Desktop Applications',
                        description: 'Windows Desktop Applications'
                    }
                ]
            },
            {
                text: 'Creative Teams',
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.design%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/UI-UX-Design.aspx',
                        text: 'UI &amp; UX Design Showcase',
                        description: 'UI &amp; UX Design Showcase'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Video-Production',
                        text: 'Video Production',
                        description: 'Video Production'
                    },
                    { navigateUrl: 'https://sswdigital.com/', text: 'SSW Digital' }
                ]
            },

            {
                text: 'Consulting',
                breakListBefore: true,
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.consulting-services%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Chinafy-App.aspx',
                        text: 'Bring Your Apps to China',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Strategic-Architecture.aspx',
                        text: 'Strategic Architecture'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Software-Audit.aspx',
                        text: 'Software Auditing',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Bots.aspx',
                        text: 'Bots',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/ALM-Azure-DevOps.aspx',
                        text: 'ALM and Azure DevOps/TFS'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/DevOps.aspx', text: 'DevOps' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Scrum.aspx', text: 'Scrum' },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Kubernetes.aspx',
                        text: 'Kubernetes'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Office-365.aspx',
                        text: 'Microsoft Office 365'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Document-Management-Workflow.aspx',
                        text: 'Document Management Workflow'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/PayPerClick.aspx',
                        text: 'Pay Per Click'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/HoloLens.aspx',
                        text: 'Microsoft HoloLens'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/ArtificialIntelligence.aspx',
                        text: 'AI &amp; Machine Learning'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Smart-Office-and-Smart-Home.aspx',
                        text: 'Smart Office &amp; Smart Home'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Access-Database-Upsizing.aspx',
                        text: 'Access Database Upsizing'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Zendesk.aspx', text: 'Zendesk' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Educational/', text: 'Educational Industry' }
                ]
            },

            {
                text: 'Platform Development',
                breakListBefore: true,
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.cms%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/SharePoint.aspx',
                        text: 'SharePoint',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Microsoft-Dynamics-365.aspx',
                        text: 'Dynamics 365',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Power-Platform.aspx',
                        text: 'Power Platform'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/WordPress.aspx',
                        text: 'WordPress'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Kentico.aspx', text: 'Kentico' },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/DNN-DotNetNuke.aspx',
                        text: 'DotNetNuke'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Sitefinity.aspx',
                        text: 'Sitefinity'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Orchard.aspx', text: 'Orchard' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Sitecore.aspx', text: 'Sitecore' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Umbraco.aspx', text: 'Umbraco' }
                ]
            },

            {
                text: 'Cloud and Infrastructure',
                description: 'Cloud and Infrastructure',
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Consulting/Default.aspx#filter=.hosting-solutions%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Azure.aspx',
                        text: 'Microsoft Azure',
                        cssClass: 'Popular'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Vault.aspx', text: 'Vault' },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Network-Architecture.aspx',
                        text: 'Network Architecture',
                        description: 'Network Architecture'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Hyper-V.aspx',
                        text: 'Virtualization with Hyper-V',
                        description: 'Virtualization with Hyper-V'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Data-Protection-Manager.aspx',
                        text: 'Data Protection Manager',
                        description: 'Data Protection Manager'
                    },
                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Consulting/BackBlaze-and-CloudBerry-Backup.aspx',
                        text: 'BackBlaze and CloudBerry Backup',
                        description: 'BackBlaze and CloudBerry Backup'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Backup-Recovery.aspx',
                        text: 'Backup/Disaster Recovery Audit',
                        description: 'Backup/Disaster Recovery Audit'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Microsoft-Teams.aspx',
                        text: 'Microsoft Teams'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Skype-for-Business.aspx',
                        text: 'Skype for Business'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Service-Desk.aspx',
                        text: 'Service Desk'
                    }
                ]
            },

            {
                text: 'Book Now',
                breakListBefore: true,
                navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Consulting.aspx',
                navigateUrlOnMobileOnly: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Consulting.aspx',
                        text: 'Team of Developers and Scrum Masters'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/Training/Courses.aspx',
                        text: 'A Trainer'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Mentoring.aspx', text: 'A Mentor' }
                ]
            }
        ]
    },

    {
        text: 'Products',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-Products.png',
        children: [
            {
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Products/Default.aspx#filter=.all%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                text: 'All Products',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Products/Default.aspx',
                        text: 'See All Products'
                    }
                ]
            },

            {
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Products/Default.aspx#filter=.ai-prod%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                text: 'AI',
                description: 'AI Products',
                children: [
                    {
                        navigateUrl: 'https://sswsophie.com/sophie-ai/',
                        target: '_blank',
                        text: 'Sophie AI',
                        description: 'SSW Sophie AI',
                        cssClass: 'ignore Popular'
                    },
                    {
                        navigateUrl: 'https://sswsophie.com',
                        target: '_blank',
                        text: 'Sophie Hub',
                        description: 'SSW Sophie Hub',
                        cssClass: 'ignore Popular'
                    }
                ]
            },

            {
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Products/Default.aspx#filter=.web-prod%3Anot(.decommissioned)',
                navigateUrlOnMobileOnly: true,
                text: 'Web',
                description: 'Products for Web',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://sugarlearning.com/',
                        target: '_blank',
                        text: 'SugarLearning',
                        description: 'SugarLearning',
                        cssClass: 'ignore Popular'
                    },
                    {
                        navigateUrl: 'https://sswtimepro.com/',
                        target: '_blank',
                        text: 'TimePro',
                        description: 'TimePro',
                        cssClass: 'ignore Popular'
                    },
                    {
                        navigateUrl: 'https://sswlinkauditor.com/',
                        target: '_blank',
                        text: 'LinkAuditor',
                        description: 'LinkAuditor',
                        cssClass: 'ignore Popular'
                    },
                    {
                        navigateUrl: 'https://sswhealthcheck.com/',
                        target: '_blank',
                        text: 'HealthCheck',
                        description: 'HealthCheck',
                        cssClass: 'ignore'
                    },
                    {
                        navigateUrl: 'https://smashingbarrier.com/',
                        target: '_blank',
                        text: 'SmashingBarrier',
                        description: 'SmashingBarrier',
                        cssClass: 'ignore'
                    }
                ]
            },

            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Standards/Support/BugReportOrEnhancement.aspx',
                navigateUrlOnMobileOnly: true,
                text: 'Support',
                description: 'Support',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://ssw.zendesk.com',
                        text: 'Knowledge Base',
                        description: 'Knowledge Base'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Standards/Support/BugReportOrEnhancement.aspx',
                        text: 'Report a Bug',
                        description: 'Bugs and Enhancements'
                    }
                ]
            }
        ]
    },
    {
        text: 'Training',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-Training.png',
        children: [
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Events/?upcomingeventsonly=false',
                navigateUrlOnMobileOnly: true,
                text: 'All Events',
                children: [
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Events/', text: 'See All Events' },
                    {
                        navigateUrl: 'https://angularhackday.com',
                        text: 'Angular Hack Days',
                        cssClass: 'Popular'
                    },
                    {
                        navigateUrl: 'https://xamarinhackday.com',
                        text: 'Xamarin Hack Days',
                        cssClass: 'Popular'
                    },
                    { navigateUrl: 'https://aihackday.com', text: 'AI Hack Days', cssClass: 'Popular' },

                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/Training/Angular-Workshop.aspx',
                        text: 'The Angular 2-Day Workshop'
                    },

                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/Training/Angular-Superpowers-Tour.aspx',
                        text: 'Angular SuperPowers Tour',
                        breakListBefore: true
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/Training/Azure-Superpowers-Tour.aspx',
                        text: 'Azure SuperPowers Tour'
                    },
                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Events/Training/NET-Core-Superpowers-Tour.aspx',
                        text: '.NET Core SuperPowers Tour'
                    },
                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Events/Training/Clean-Architecture-Superpowers-Tour.aspx',
                        text: 'Clean Architecture SuperPowers Tour'
                    },

                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Events/Training/Scrum-Training-Course-3-days.aspx',
                        text: 'Professional Scrum Developer Training'
                    },
                    {
                        navigateUrl:
                            'https://www.ssw.com.au/ssw/Events/Training/Professional-Tailored-Scrum.aspx',
                        text: 'Professional Tailored Scrum Training'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/Training/Training-Options.aspx',
                        text: 'Customized Training',
                        cssClass: 'Popular'
                    }
                ]
            },

            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Events/?upcomingeventsonly=true',
                navigateUrlOnMobileOnly: true,
                text: 'Events by Technology',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/?tech=angular_and_react',
                        text: 'Angular / React'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=sharepoint', text: 'SharePoint' },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Events/?tech=dynamics_365',
                        text: 'Dynamics 365'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=visual_studio_and_tfs',
                        text: 'Visual Studio / TFS'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=scrum', text: 'Scrum' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/Events/?tech=_net_core', text: '.NET Core' },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=mobile_development',
                        text: 'Mobile Development'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=sql_server', text: 'SQL Server' },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/events/?tech=other', text: 'Other' }
                ]
            },

            {
                navigateUrl:
                    'https://www.ssw.com.au/ssw/Events/?upcomingeventsonly=true%26types=ssw_courses',
                navigateUrlOnMobileOnly: true,
                text: 'Events by Type',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/events/?types=ssw_courses',
                        text: 'SSW Training'
                    },
                    { navigateUrl: 'https://www.ssw.com.au/ssw/events/?types=webinar', text: 'Webinars' }
                ]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Events/?videoonly=true%26upcomingeventsonly=true',
                navigateUrlOnMobileOnly: true,
                text: 'Related Services',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Consulting/Video-Production/',
                        text: 'Video Recording / Live Streaming'
                    },
                    {
                        navigateUrl: 'http://sswchapel.com.au/',
                        target: '_blank',
                        text: 'Conference Room for Hire',
                        cssClass: 'ignore'
                    }
                ]
            }
        ]
    },

    {
        text: 'User Group',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-UserGroup.png',
        children: [
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Sydney.aspx',
                navigateUrlOnMobileOnly: true,
                text: 'Sydney .NET UG',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Sydney.aspx',
                        text: 'Upcoming Sessions'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Company/Directions/NeutralBay/',
                        text: 'Map to SSW Sydney',
                        cssClass: 'map',
                        description: 'Map to SSW Sydney'
                    }
                ]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Canberra.aspx',
                navigateUrlOnMobileOnly: true,
                text: 'Canberra .NET UG',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Canberra.aspx',
                        text: 'Upcoming Sessions'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/UserGroupMapDirectionsCanberra.aspx',
                        text: 'Map to Microsoft Canberra',
                        cssClass: 'map',
                        description: 'Map to Microsoft'
                    }
                ]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Melbourne.aspx',
                navigateUrlOnMobileOnly: true,
                text: 'Melbourne .NET UG',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Melbourne.aspx',
                        text: 'Upcoming Sessions'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Company/Directions/Melbourne/',
                        text: 'Map to SSW Melbourne',
                        cssClass: 'map',
                        description: 'Map to SSW Melbourne'
                    }
                ]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Brisbane.aspx',
                navigateUrlOnMobileOnly: true,
                text: 'Brisbane Full Stack UG',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Brisbane.aspx',
                        text: 'Upcoming Sessions'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Company/Directions/Brisbane/',
                        text: 'Map to SSW Brisbane',
                        cssClass: 'map',
                        description: 'Map to SSW Brisbane'
                    }
                ]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Live/',
                navigateUrlOnMobileOnly: true,
                text: 'Live UG',
                breakListBefore: true,
                children: [{ navigateUrl: 'https://www.ssw.com.au/ssw/Live/', text: 'Sydney .NET UG Live' }]
            },
            {
                navigateUrl: 'https://fireusergroup.com/',
                navigateUrlOnMobileOnly: true,
                text: 'Fire UG - China',
                children: [{ navigateUrl: 'https://fireusergroup.com/', text: 'Upcoming Sessions' }]
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/',
                navigateUrlOnMobileOnly: true,
                text: 'Resources',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/SSWUpdatePrevious.aspx',
                        text: 'Newsletters'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/PastSessions.aspx',
                        text: 'Past Sessions'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/UGEvaluationSurvey.aspx',
                        text: 'Evaluation Survey'
                    },
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/Developerlinks.aspx',
                        text: 'Developer Links'
                    }
                ]
            }
        ]
    },

    {
        text: 'Rules',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-Standards.png',
        children: [
            {
                navigateUrl: 'https://rules.ssw.com.au/Pages/default.aspx',
                text: 'New SSW Rules',
                description: 'All Rules'
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Standards/Default.aspx',
                text: 'SSW Rules',
                description: 'All Rules'
            },
            {
                text: 'Popular Rules',
                navigateUrl: 'https://www.ssw.com.au/ssw/Standards/Default.aspx',
                description: 'Popular Rules',
                breakListBefore: true,
                children: [
                    {
                        navigateUrl: 'https://rules.ssw.com.au/rules-to-successful-projects',
                        text: 'Rules to Successful Projects'
                    },
                    {
                        navigateUrl: 'https://rules.ssw.com.au/rules-to-better-email',
                        text: 'Rules to Better Email'
                    },
                    {
                        navigateUrl: 'https://rules.ssw.com.au/rules-to-better-google-rankings',
                        text: 'Rules to Better Google Rankings'
                    },
                    {
                        navigateUrl:
                            'https://rules.ssw.com.au/rules-to-better-interfaces-(general-usability-practices)',
                        text: 'Rules to Better Interfaces'
                    },
                    {
                        navigateUrl: 'https://rules.ssw.com.au/rules-to-better-code',
                        text: 'Rules to Better Code'
                    },
                    {
                        navigateUrl: 'https://rules.ssw.com.au/rules-to-better-scrum-using-azure-devops',
                        text: 'Rules to Better Scrum using Azure DevOps'
                    }
                ]
            },
            {
                navigateUrl: 'https://bettersoftwaresuggestions.com/',
                text: 'New SSW Better Software Suggestions',
                description: 'Better Software Wish List by SSW',
                breakListBefore: true
            },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Standards/BetterSoftwareSuggestions/',
                text: 'SSW Better Software Suggestions',
                description: 'Better Software Wish List by SSW'
            }
        ]
    },
    {
        text: 'About Us',
        groupImageUrl: 'https://www.ssw.com.au/ssw/images/Menu-Banner-AboutUs.png',
        children: [
            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/AboutUs.aspx', text: 'About Us' },
            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/Awards.aspx', text: 'Awards' },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/News/',
                text: 'News & Press',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/NETUG/SSWUpdatePrevious.aspx',
                        text: 'Newsletters'
                    }
                ]
            },
            { navigateUrl: 'https://blog.ssw.com/', text: 'Blog', breakListBefore: true },
            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/Culture', text: 'Our Culture' },
            { navigateUrl: 'https://www.ssw.com.au/people/', text: 'Our People' },
            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Company/Clients',
                text: 'Our Clients',
                children: [
                    {
                        navigateUrl: 'https://www.ssw.com.au/ssw/Testimonials/default.aspx',
                        text: 'Testimonials'
                    }
                ]
            },
            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/History.aspx', text: 'Our History', breakListBefore: true },
            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/Offices.aspx', text: 'Our Offices' },

            {
                navigateUrl: 'https://www.ssw.com.au/ssw/Employment/Employment.aspx',
                text: 'Employment Opportunities'
            },

            { navigateUrl: 'https://www.ssw.com.au/ssw/Company/ContactUs.aspx', text: 'Contact Us' }
        ]
    },
    {
        text: 'SSW TV',
        cssClass: 'ignore no-dropdown menu-ssw-tv',
        navigateUrl: 'http://tv.ssw.com',
        target: '_blank'
    }
];

function CountChildren(items) {
    let count = items.length;
    items.forEach(level1 => {
        if (level1.children) {
            count += level1.children.length;
        }
    })
    return count;
};


function buildDesktopMenu() {

    let desktopmenu = `<div class="menu-drop hidden-xs hidden-sm">
                        <ul>`
    menuItems.forEach((item, index) => {
        desktopmenu += `<li>`;

        if (!item.children) {
            desktopmenu += `<a href=${item.navigateUrl ? item.navigateUrl : "javascript:void(0)"} class="ignore ignore no-dropdown">
                        ${item.text}
                        </a>`
        } else {
            desktopmenu += `  <a href="javascript:void(0)" class="ignore ">
                                ${item.text} <i class="fa fa-angle-down"></i>
                            </a>
                            <div class="Menu">
                                <div class="MenuImg">
                                <img src=${item.groupImageUrl} />
                                </div>
                                <div class="MenuWrapper row">
                                ${createLevel1(item.children)}
                                </div>
                            </div>`;
        }
        desktopmenu += `</li>`;
    });


    desktopmenu += `    </ul>
                    </div>`
    return desktopmenu;
}

function createLevel1(items, mobile) {
    let countChildren = CountChildren(items);
    let currentIndex = 0;
    let level1 = `<ul class="col-md-3 ${mobile ? "dropdown-menu" : ""}">`;
    let currentColumn = 1;
    items.forEach(level1Item => {
        if (level1Item.breakListBefore && !mobile) {
            level1 += '</ul><ul class="col-md-3">';
            currentIndex = 0;
            currentColumn++;
        }
        currentIndex++;
        level1 += ` <li class='${level1Item.navigateUrlOnMobileOnly && !mobile ? "NonClickableMenuItem level1" : "level1"}' >
                        <a href=${level1Item.navigateUrlOnMobileOnly ? level1Item.navigateUrl : "javascript:void(0)"}  class="ignore">
                            ${level1Item.text}
                        </a>
                    </li>
                    ${!mobile && level1Item.children ? createLevel2(level1Item.children, countChildren, currentIndex, currentColumn) : ""}`;
    });
    level1 += '</ul>';
    return level1;
}
function createLevel2(items, countChildren, currentIndex, currentColumn) {
    let level2 = '';
    items.forEach(level2Item => {
        currentIndex++;
        if (level2Item.breakListBefore || currentIndex > countChildren / currentColumn) {
            level2 += '</ul><ul class="col-md-3">';
            currentColumn++;
            currentIndex = 0;
        }
        level2 += `<li class='${(level2Item.cssClass ? level2Item.cssClass : "") + " level2"}'>
                    <a href=${level2Item.navigateUrl ? level2Item.navigateUrl : "javascript:void(0)"} class="ignore">
                        ${level2Item.text}
                    </a>
                </li>`;
    });
    return level2;
}

function search(search) {
    if (window) {
        window.location.href = `https://www.google.com.au/search?q=site:ssw.com.au%20${search}`;
    }
};

function handleKeyDown(e) {
    if (e.key === 'Enter') {
        search(e.target.value);
    }
}

var isMenuOpened = false;

function buildMobileMenu() {
    let mobileMenu = `<div class="sb-slidebar sb-left" id="slide-bar">
      <div class="menu-drop navbar-collapse">
        <ul class="nav navbar-nav">`;
    menuItems.forEach((item, index) => {
        mobileMenu += `<li class="dropdown">`;
        if (!item.children) {
            mobileMenu += `<a href='${item.navigateUrl}' class="ignore ignore no-dropdown">
                                ${item.text}
                            </a>`;
        }
        else {
            mobileMenu += `<a href="javascript:void(0)" class="dropdown-toggle ${item.CssClass}">
                    ${item.text} <i class="fa fa-angle-down"></i>
                  </a>        
                ${createLevel1(item.children, true)}`
        }
        mobileMenu += `</li>`;
    })
    mobileMenu += ` </ul>
                    </div>
                    </div>`;
    return mobileMenu;
}


export function buildMegaMenu() {
    const desktopMenu = buildDesktopMenu();
    const mobileMenu = buildMobileMenu();
    var menuHtml = `
        <div id="MegaMenu">
            <div class="menu-content">
            <div class="menu-mobile visible-xs visible-sm" >
                <a  class="sb-toggle-left" id="menuToggle">
                <i class="fa fa-bars"></i>
                </a>
            </div>`;

    menuHtml += desktopMenu;
    menuHtml += `
                <div class="menu-search search-input">
                    <input type="text" class="search-box" id="search" />
                </div>
            </div>
        </div>
    <div>`;
    menuHtml += mobileMenu;

    menuHtml += '</div>';
     return menuHtml

};
export function registerEvents(){
if (typeof window !== 'undefined') {
    //document.getElementById("sswmegamenu").innerHTML = menuHtml;
    document.getElementById("menuToggle").addEventListener('click', function (event) {
        isMenuOpened = !isMenuOpened;     
        document.getElementById("MegaMenu").className = isMenuOpened?"content-translate":""; 
        //var html = document.getElementsByTagName("html")[0];    
        //html.className = isMenuOpened?"content-translate":"";      
        document.getElementById("slide-bar").className = "sb-slidebar sb-left " + (isMenuOpened ? "sb-active" : "");
    });
    document.getElementById("slide-bar").addEventListener('click', function (event) {
        if (event.target.parentNode.className === "dropdown") {
            var openedItems = document.getElementsByClassName("dropdown open");
            for (let item of openedItems) {
                item.className = "dropdown"
            }
            event.target.parentNode.className = "dropdown open";
        } else if (event.target.parentNode.className === "dropdown open") {
            event.target.parentNode.className = "dropdown";
        }
    });
    document.getElementById("search").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            search(event.target.value);
        }
    });
    return true;
}
}
