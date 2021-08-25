import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);
        // 여기서 history의 go, goback, gofoward 등이 url을 변경한다.
        console.log(this.props);
        // 카드를 클릭하지 않고, url에 바로 /movie-detail을 치면 state 가 undefined이다. 이러한 경우, home으로 redirect
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;

        // render 실행 후, componetnDidMount가 실행되기 때문에, url을 한번더 엔터를 누르면 에러가 발생한다.
        // 이를 방지 하기 위해 location이 존재하는 지 체크하고, 없는 경우 null을 리턴하고 다시 home 으로 돌아간다.

        if (location.state) {
            return (
                <span>{location.state.title}</span>
            );
        } else {
            return null;
        }

    }
}

export default Detail;