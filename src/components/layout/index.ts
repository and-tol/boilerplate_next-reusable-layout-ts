import { SITE_TYPE, Site_Typing } from 'src/constants';

export * from 'src/components/layout/Meta'
import { Layout_SingleShared } from 'src/components/layout/Single-Shared-Layout'
import { Layout_PerPage  } from 'src/components/layout/Per-Page-Layouts'
import { LayoutProps } from 'src/types';

export let Layout: LayoutProps = Layout_SingleShared 


if (SITE_TYPE === Site_Typing.PerPage) {
    Layout = Layout_PerPage
}
