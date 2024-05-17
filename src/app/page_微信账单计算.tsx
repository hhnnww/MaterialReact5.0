import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useImmer } from 'use-immer';
import { GridHeader } from '~/component/box';

export function Component() {
	const [formData, setFormData] = useImmer({
		text: '',
		resCount: 0,
	});

	function MatchText(text: string) {
		const textList = text.match(/-(.*?)\./g);
		let all_count = 0;

		textList?.map((item) => {
			let in_item = item.replace('.', '');
			in_item = in_item.replaceAll('-', '');
			in_item = in_item.replaceAll(',', '');
			all_count = all_count + parseInt(in_item);
		});

		return all_count;
	}

	return (
		<>
			<Grid2 container spacing={2}>
				<GridHeader title='计算微信账单' />
				<Grid2 xs={12}>
					<TextField
						value={formData.text}
						onChange={(event) =>
							setFormData((draft) => {
								draft.text = event.target.value;
								draft.resCount = 0;
							})
						}
						multiline
						rows={10}
						label='微信资金账单本文'
					/>
				</Grid2>

				<Grid2 xs={12}>
					<TextField
						onFocus={(event) => {
							event.target.select();
						}}
						value={formData.resCount}
						label='统计结果'
					/>
				</Grid2>

				<Grid2 xs={12}>
					<Button
						variant='contained'
						onClick={() =>
							setFormData((draft) => {
								draft.resCount = MatchText(formData.text);
							})
						}
					>
						提交
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
