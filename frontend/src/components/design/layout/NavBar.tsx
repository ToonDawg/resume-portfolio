import { Menu, MenuProps } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined, ContactsOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { SettingsButton } from './SettingsButton';
import { ThemeContext } from '../../Context/ThemeContext';

const StyledMenu = styled(Menu)`
    width: 100%;
    justify-content: right;
`

export const NavBar = () => {
    const [current, setCurrent] = useState('home');
    const themeToggle = useContext(ThemeContext);


    const NavigationItems = useMemo(() => {
        const items: MenuProps['items'] = [
            {
                label: 'Home',
                key: 'home',
                icon: <HomeOutlined />,
            },
            {
                label: 'About',
                key: 'about',
                icon: <UserOutlined />,
            },
            {
                label: 'Projects',
                key: 'projects',
                icon: <ProjectOutlined />,
            },
            {
                label: 'Contact',
                key: 'contact',
                icon: <ContactsOutlined />,
            },
            {
                label: <SettingOutlined />,
                key: 'settings',
                children: [
                    {
                        label: <SettingsButton label='Dark Mode' toggle={themeToggle} />,
                        key: 'dark-mode',
                    },
                ],
            },
        ];

        return items;
    }, [themeToggle]);


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    return (
        <StyledMenu inlineCollapsed={false} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={NavigationItems} />
    );
};


