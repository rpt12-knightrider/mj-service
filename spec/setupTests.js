import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'node-fetch';

configure({ adapter: new Adapter() });
