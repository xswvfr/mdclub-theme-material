import { h } from 'hyperapp';
import './index.less';

export default (global_state, global_actions) => {
  const actions = global_actions.inbox;
  const state = global_state.inbox;

  return ({ match }) => (
    <div
      oncreate={() => actions.init({ global_actions })}
      key={match.url}
      id="page-inbox"
      class="mdui-container"
    >inbox</div>
  );
};