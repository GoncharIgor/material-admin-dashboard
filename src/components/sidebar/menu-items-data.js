import {
    AttachMoney,
    BarChart, ChatBubbleOutline, DynamicFeed,
    LineStyle, MailOutline,
    PermIdentity,
    Report,
    Storefront,
    Timeline,
    TrendingUp, WorkOutline
} from "@material-ui/icons";

export const dashboardMenuItems = [
    {
        name: 'Home',
        icon: LineStyle
    },
    {
        name: 'Analytics',
        icon: Timeline
    },
    {
        name: 'Sales',
        icon: TrendingUp
    }
]

export const quickMenuItems = [
    {
        name: 'Users',
        icon: PermIdentity
    },
    {
        name: 'Products',
        icon: Storefront
    },
    {
        name: 'Transactions',
        icon: AttachMoney
    },
    {
        name: 'Reports',
        icon: BarChart
    }
]

export const notificationsMenuItems = [
    {
        name: 'Mail',
        icon: MailOutline
    },
    {
        name: 'Feedback',
        icon: DynamicFeed
    },
    {
        name: 'Messages',
        icon: ChatBubbleOutline
    }
]

export const otherMenuItems = [
    {
        name: 'Manage',
        icon: WorkOutline
    },
    {
        name: 'Analytics',
        icon: Timeline
    },
    {
        name: 'Reports',
        icon: Report
    }
]
