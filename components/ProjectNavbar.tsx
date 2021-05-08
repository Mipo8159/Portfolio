import { Category } from '../types';

export const NavItem: React.FC<{
  value: Category | 'all';
  handleFilter: Function;
  active: string;
}> = ({ value, handleFilter, active }) => {
  let className = 'capitalize cursor-pointer hover:text-red-400';
  if (active === value) className += ' text-green';

  return (
    <li className={className} onClick={() => handleFilter(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: React.FC<{ handleFilter: Function; active: string }> = (
  props
) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all' {...props} />
      <NavItem value='react' {...props} />
      <NavItem value='mongo' {...props} />
      <NavItem value='django' {...props} />
      <NavItem value='node' {...props} />
    </div>
  );
};

export default ProjectNavbar;
