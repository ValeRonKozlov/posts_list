import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
      {/* поиск */}
      <MyInput
        value={filter.qery}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />

      {/* фильтр */}
      <div className="filter">
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Sort By'
          options={[
            {value: 'title', name: 'Name'},
            {value: 'body', name: 'Description'}
          ]}
        />
      </div>
		</div>
	);
};

export default PostFilter;