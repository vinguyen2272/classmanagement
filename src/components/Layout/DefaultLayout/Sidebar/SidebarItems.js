import { BookIcon, HomeIcon, BioTechIcon, SchoolIcon, CalendarIcon, GroupIcon, FolderIcon, SettingIcon, } from '../../../../assets/svg/NavigationMenu/NavigationMenu';
const SidebarItems = [
    {
        label: 'Home',
        icon: HomeIcon,
        key: 'home',
        path: '/',
    },
    {
        label: 'Syllabus',
        icon: BookIcon,
        key: 'syllabus',
        items: [
            {
                label: 'View syllabus',
                key: 'viewSyllabus',
                path: '/syllabus/view',
            },
            {
                label: 'Create syllabus',
                key: 'createSyllabus',
                path: '/syllabus/create',
            },
        ],
    },
    {
        label: 'Training program',
        icon: BioTechIcon,
        key: 'trainingProgram',
        items: [
            {
                label: 'View Program',
                key: 'viewProgram',
                path: '/training-program/view',
            },
            {
                label: 'Create Program',
                key: 'createProgram',
                path: '/training-program/create',
            },
        ],
    },
    {
        label: 'Class',
        icon: SchoolIcon,
        key: 'class',
        items: [
            {
                label: 'View Class',
                key: 'viewClass',
                path: '/class/view',
            },
            {
                label: 'Create Class',
                key: 'createClass',
                path: '/class/create',
            },
        ],
    },
    {
        label: 'Training calendar',
        icon: CalendarIcon,
        key: 'trainingCalendar',
        path: '/training-calendar/',
    },
    {
        label: 'User management',
        icon: GroupIcon,
        key: 'userManagement',
        items: [
            {
                label: 'User list',
                key: 'userList',
                path: '/user-management/list',
            },
            {
                label: 'User permission',
                key: 'userPermission',
                path: '/user-management/permission',
            },
        ],
    },
    {
        label: 'Learning materials',
        icon: FolderIcon,
        key: 'learningMaterials',
        path: '/learning-materials/',
    },
    {
        label: 'Setting',
        icon: SettingIcon,
        key: 'setting',
        items: [
            {
                label: 'Calendar',
                key: 'settingCalendar',
                path: '/setting/calendar',
            },
        ],
    },
];
export default SidebarItems;
