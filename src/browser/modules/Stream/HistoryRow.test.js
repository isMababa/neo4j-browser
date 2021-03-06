/*
 * Copyright (c) 2002-2017 "Neo4j, Inc,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global describe, beforeEach, afterEach, test, expect, jest */
import { mount } from 'services/testUtils'
import HistoryRow from './HistoryRow'

describe('HistoryRow', () => {
  test('triggers function on click', () => {
    // Given
    const myFn = jest.fn()
    const entry = 'foobar'

    // When
    const result = mount(HistoryRow)
      .withProps({ handleEntryClick: myFn, entry: entry })
      .then(wrapper => {
        wrapper.simulate('click')
        expect(wrapper.text()).toBe(entry)
        expect(myFn).toHaveBeenCalledWith(entry)
      })
    return result
  })
})
