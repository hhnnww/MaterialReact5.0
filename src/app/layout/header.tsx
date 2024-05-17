import AnimationTwoToneIcon from '@mui/icons-material/AnimationTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import HomeMiniTwoToneIcon from '@mui/icons-material/HomeMiniTwoTone';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import { Box, Button, Divider, Stack } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Container } from '~/component/box';

export function Header() {
	return (
		<>
			<Box py={4}>
				<Container>
					<Stack direction={'row'} justifyContent={'space-between'}>
						<HeaderMenu />
						<ChangeMode />
					</Stack>
				</Container>
			</Box>
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
						sx={(theme) => ({
							'padding': '5px 18px',
							'&.active': {
								backgroundColor:
									theme.vars.palette.primary.main,
								color: '#FFFFFF',
								svg: {
									opacity: 1,
								},
							},
							'svg': { opacity: 0.5 },
						})}
						key={item.link}
						component={NavLink}
						startIcon={item.icon}
						to={item.link}
					>
						{item.name}
					</Button>
				))}
			</Stack>
		</>
	);
}

export function ChangeMode() {
	const { mode, setMode } = useColorScheme();

	return (
		<>
			<Button
				onClick={() => {
					setMode(mode === 'light' ? 'dark' : 'light');
				}}
				color='inherit'
				startIcon={<WbSunnyTwoToneIcon />}
			>
				ChangeMode
			</Button>
		</>
	);
}
