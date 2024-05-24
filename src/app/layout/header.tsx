import AnimationTwoToneIcon from '@mui/icons-material/AnimationTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import HomeMiniTwoToneIcon from '@mui/icons-material/HomeMiniTwoTone';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import { AppBar, Button, Divider, Stack, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export function Header() {
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<HeaderMenu />
				</Toolbar>
			</AppBar>
			<Divider />
		</>
	);
}

export function HeaderMenu() {
	const headerMenuList = [
		{ name: '首页', link: '', icon: <HomeMiniTwoToneIcon /> },
		{
			name: '素材编辑',
			link: 'MaterialEdit',
			icon: <AutoAwesomeTwoToneIcon />,
		},
		{
			name: '素材下载',
			link: 'MaterialDown',
			icon: <ArrowCircleDownTwoToneIcon />,
		},
		{
			name: '素材合并',
			link: 'MaterialMerge',
			icon: <AnimationTwoToneIcon />,
		},
		{
			name: '素材自动处理',
			link: 'MaterialAutoAction',
			icon: <LayersTwoToneIcon />,
		},
		{
			name: '计算微信支付',
			link: 'CountWeChatBill',
			icon: <PaidTwoToneIcon />,
		},
		{
			name: '打开百度网盘链接',
			link: 'OpenBaiduLink',
			icon: <PaidTwoToneIcon />,
		},
		{
			name: '获取百度网盘分享链接',
			link: 'GetBaiduYunShareLinks',
			icon: <AnimationTwoToneIcon />,
		},
	];

	return (
		<>
			<Stack direction={'row'} spacing={1} alignItems={'start'}>
				{headerMenuList.map((item) => (
					<Button
						color={'inherit'}
						key={item.link}
						component={NavLink}
						startIcon={item.icon}
						to={item.link}
						sx={(theme) => ({
							'padding': '3px 12px',
							'&.active': {
								backgroundColor:
									theme.vars.palette.primary.main,
							},
						})}
					>
						{item.name}
					</Button>
				))}
			</Stack>
		</>
	);
}
