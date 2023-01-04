import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { grey, lightBlue } from '@mui/material/colors';

function Footer() {
  return (
    <S.Wrap>
      <ul>
        <Grid container spacing={2}>
          <Grid item md={2} xs={12}>
            <li>
              <span>상호</span>
              <a href="https://bit.ly/3rBhpm7">새만금중고</a>
            </li>
          </Grid>
          <Grid item md={2} xs={12}>
            <li>
              <span>대표자명</span>
              <span>김순자</span>
            </li>
          </Grid>
          <Grid item md={3} xs={12}>
            <li>
              <span>대표전화번호</span>
              <span>063-453-4137</span>
            </li>
          </Grid>
          <Grid item md={3} xs={12}>
            <li>
              <span>사업자등록번호</span>
              <span>111-12-11111</span>
            </li>
          </Grid>
          <Grid item xs={12}>
            <li>
              <span>영업시간</span>
              09:00 ~ 19:00 (일요일 휴무)
            </li>
          </Grid>
          <Grid item xs={12}>
            <li>
              <span>오시는 길</span>
              <a href="https://bit.ly/3rBhpm7">
                54123 전라북도 군산시 팔마로 46 (군산시 문화동 908-21)
              </a>
            </li>
          </Grid>
        </Grid>
        <div className={'blog'}>
          <a href="https://blog.naver.com/apt4137">
            <Image width={35} height={35} src="/blog.png" alt="blog" />
            <span>NAVER blog</span>
          </a>
        </div>
      </ul>
    </S.Wrap>
  );
}

export default Footer;

const S = {
  Wrap: styled('div')(({ theme }) => ({
    height: 130,
    marginTop: 40,
    backgroundColor: `${grey[200]}`,
    borderTop: `1px solid ${grey[400]}`,
    color: `${grey[600]}`,
    fontSize: '0.8125rem',
    fontWeight: 400,

    '& a': {
      color: `${lightBlue[900]}`,
    },

    '& ul': {
      position: 'relative',
      display: 'flex',
      maxWidth: 900,
      margin: '0 auto',
      paddingTop: '0px',
      padding: '30px 0',

      '& li': {
        '& span': {
          paddingRight: '20px',
        },
      },

      '& .blog': {
        '& img': {
          marginRight: '5px',
        },

        '& a': {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          right: '17.5%',
          bottom: '12%',
        },

        '& span': {
          paddingRight: '20px',
          fontSize: '1rem',
          fontWeight: 600,
          color: `${grey[600]}`,
        },
      },
    },

    [theme.breakpoints.down('md')]: {
      height: '250px',
      '& ul': {
        padding: '30px 30px',

        '& .blog': {
          '& a': {
            right: '9%',
            bottom: '-5%',
          },
        },
      },
    },
  })),
};
