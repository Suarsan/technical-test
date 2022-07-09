import { FilterByCompanyNamePipe } from './filter-by-company-name.pipe';

describe('FilterByCompanyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCompanyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
