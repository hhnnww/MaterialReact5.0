import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useRef } from 'react';
import { DefaultService } from '~/client';

export function Component() {
	const content_list = [
		{
			name: '浏览器请求HEADER',
			help_text: '创建分享的浏览器请求',
			ref: useRef<HTMLTextAreaElement>(null),
			default: '',
		},
		{
			name: '自动发货页面本文',
			help_text: '在自动发货中需要添加地址的产品页面本文',
			ref: useRef<HTMLTextAreaElement>(null),
			default: '',
		},
		{
			name: '文件列表JSON',
			help_text: '百度网盘文件列表请求中返回的JSON',
			ref: useRef<HTMLTextAreaElement>(null),
			default: '[]',
		},
	];

	return (
		<Grid2 container sx={{ mt: 6 }} spacing={3}>
			{content_list.map((item) => (
				<Grid2 xs={4} key={item.name}>
					<TextField
						label={item.name}
						name={item.name}
						inputRef={item.ref}
						multiline
						rows={10}
						helperText={item.help_text}
						defaultValue={item.default}
					/>
				</Grid2>
			))}

			<Grid2 xs={12}>
				<Button
					variant='contained'
					onClick={() =>
						DefaultService.funBaiduyunDelShareRequestGetBaiduShareLinkPost(
							{
								file_list_json: content_list[2].ref.current
									?.value as string,
								header: content_list[0].ref.current
									?.value as string,
								maid_list: content_list[1].ref.current
									?.value as string,
							},
						).then((res) => {
							console.log(res);
						})
					}
				>
					提交
				</Button>
			</Grid2>
		</Grid2>
	);
}
