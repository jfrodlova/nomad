/*
 * Copyright The NOMAD Authors.
 *
 * This file is part of NOMAD. See https://nomad-lab.eu for further info.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FilterSubMenu, filterMenuContext } from './FilterMenu'
import { InputGrid, InputGridItem } from '../input/InputGrid'
import InputField from '../input/InputField'
import InputRange from '../input/InputRange'

const FilterSubMenuAuthor = React.memo(({
  id,
  ...rest
}) => {
  const {selected, open} = useContext(filterMenuContext)
  const visible = open && id === selected

  return <FilterSubMenu id={id} {...rest}>
    <InputGrid>
      <InputGridItem xs={12}>
        <InputField
          quantity="authors.name"
          visible={visible}
          disableOptions
        />
      </InputGridItem>
      <InputGridItem xs={12}>
        <InputRange
          quantity="upload_create_time"
          visible={visible}
        />
      </InputGridItem>
      <InputGridItem xs={12}>
        <InputRange
          quantity="run.time_run.date_start"
          visible={visible}
        />
      </InputGridItem>
      <InputGridItem xs={12}>
        <InputField
          quantity="external_db"
          visible={visible}
          disableSearch
        />
      </InputGridItem>
      <InputGridItem xs={12}>
        <InputField
          quantity="datasets.dataset_name"
          visible={visible}
        />
      </InputGridItem>
      <InputGridItem xs={12}>
        <InputField
          quantity="datasets.doi"
          visible={visible}
          disableStatistics
          disableOptions
        />
      </InputGridItem>
    </InputGrid>
  </FilterSubMenu>
})
FilterSubMenuAuthor.propTypes = {
  id: PropTypes.string
}

export default FilterSubMenuAuthor
