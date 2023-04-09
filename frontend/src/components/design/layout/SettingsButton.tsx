import { Space, Switch } from 'antd';
import { ToggleType } from '../../../hooks/useToggle';

type SettingsButtonType = {
    label: string,
    toggle: ToggleType
}
export const SettingsButton = ({ label, toggle }: SettingsButtonType) => {
    return (
        <Space size='middle' >
            <>{label}</>
            <Switch checked={toggle.state} onChange={toggle.toggle} />
        </Space>
    )
}