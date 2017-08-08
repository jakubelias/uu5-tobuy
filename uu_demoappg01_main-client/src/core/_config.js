import React from "react";
import * as UU5 from "uu5g04";
import ns from "ns";

const Cfg = {
  APP: ns.namespace,
  CSS: ns.cssPrefix,

  LSILABEL_APP_NAME: <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="en">Demo Template Application</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="cs">Šablona demo aplikace</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>,

  LSIHOME: {
    "cs": "Domů",
    "en": "Home"
  },

  LSIWITH_PARAM: {
    "cs": "S parametry",
    "en": "With parameters"
  },

  LSIOTHER: {
    "cs": "Další",
    "en": "Other"
  },

  LSIROUTING_HEADER: {
    "cs": "Ukázka routování",
    "en": "Routing example"
  }
};

Cfg.CCRKEY_SPA_AUTHENTICATED = Cfg.APP + '.DemoSpaAuthenticated';

Cfg.CONTENT_UUDEMO = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="en">
    <UU5.Bricks.Section header="Template Demo Application">
      <UU5.Bricks.P>This is template demo application</UU5.Bricks.P>
      <UU5.Bricks.P>
        The template is intended as a pattern for application development in <UU5.Bricks.LinkPlus4U/> service.
      </UU5.Bricks.P>
      <Plus4U5.App.LoginButton/>
    </UU5.Bricks.Section>
  </UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="cs">
    <UU5.Bricks.Section header="Šablona demo aplikace">
      <UU5.Bricks.P>Toto je demo šablona aplikace.</UU5.Bricks.P>
      <UU5.Bricks.P>
        Šablona je určena jako vzor pro vývoj aplikací ve službě <UU5.Bricks.LinkPlus4U/>.
      </UU5.Bricks.P>
      <Plus4U5.App.LoginButton/>
    </UU5.Bricks.Section>
  </UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;

Cfg.CONTENT_DEMO_CONTENT_LOADING = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="en">
    <UU5.Bricks.P>Demo data is loading ...</UU5.Bricks.P>
    <Plus4U5.App.Loading content="uuApp Template"/>
  </UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="cs">
    <UU5.Bricks.P>Načítají se demo data ...</UU5.Bricks.P>
    <Plus4U5.App.Loading content="Šablona uuApp"/>
  </UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;

Cfg.CONTENT_DEMO_CONTENT_ERROR = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="en">
    <UU5.Bricks.Section header="Error">
      <UU5.Bricks.P>
        There is en error durring loading data.
      </UU5.Bricks.P>
      <UU5.Bricks.P>
        Contact <UU5.Bricks.LinkPlus4U/> if necessary.
      </UU5.Bricks.P>
    </UU5.Bricks.Section>
  </UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="cs">
    <UU5.Bricks.Section header="Chyba">
      <UU5.Bricks.P>
        Při načítají dat o knize došlo k chybě.
      </UU5.Bricks.P>
      <UU5.Bricks.P>
        V případě potřeby kontaktujte <UU5.Bricks.LinkPlus4U/>.
      </UU5.Bricks.P>
    </UU5.Bricks.Section>
    <UU5.Bricks.Line colorSchema="danger" />
  </UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;

Cfg.CONTENT_DEMO_CONTENT_ERROR = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="en">
    <UU5.Bricks.Section header="Error">
      <UU5.Bricks.P>
        There is en error durring loading data.
      </UU5.Bricks.P>
      <UU5.Bricks.P>
        Contact <UU5.Bricks.LinkPlus4U/> if necessary.
      </UU5.Bricks.P>
    </UU5.Bricks.Section>
  </UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="cs">
    <UU5.Bricks.Section header="Chyba">
      <UU5.Bricks.P>
        Při načítají dat o knize došlo k chybě.
      </UU5.Bricks.P>
      <UU5.Bricks.P>
        V případě potřeby kontaktujte <UU5.Bricks.LinkPlus4U/>.
      </UU5.Bricks.P>
    </UU5.Bricks.Section>
    <UU5.Bricks.Line colorSchema="danger" />
  </UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;

export default Cfg;
