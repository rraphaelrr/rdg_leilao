import React, { Component } from 'react';
import Text from '../../componentes/text';
import icones from '../../constants/icons';

import { View, Dimensions, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Info from '../../constants/info';
import { NavigationEvents } from 'react-navigation';
import Objetos from '../../constants/objetos';
import { format } from 'date-fns'
import Icone from 'react-native-vector-icons/FontAwesome';
import { Badge, Icon } from 'react-native-elements'

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import * as ScreenOrientation from 'expo-screen-orientation';

import { SafeAreaView } from 'react-native-safe-area-context';

//Import all the screens
import Screen1 from '../home/home';
import Screen2 from '../cartoes/cartoes';
import Screen3 from '../comprovantes/comprovantes';
import Screen4 from '../deposito/deposito';
import Screen5 from '../pagar/pagar';
import Screen6 from '../transferencia/transferencia';
import Screen7 from '../recarga/recarga';
import Screen8 from '../extrato/extrato';
import Screen9 from '../perfil/perfil';
import Screen10 from '../ajuda/ajuda';
import Screen11 from '../deposito/boleto';
import Screen12 from '../maquininha/dados_ini';
import Screen13 from '../maquininha/foto_comprovante_atividade';
import Screen14 from '../maquininha/foto_estabelecimento';
import Screen15 from '../maquininha/dados_complementares';
import Screen16 from '../maquininha/termos_maquininha';
import Screen17 from '../maquininha/pedido_realizado';
import Screen18 from '../beneficios/beneficios';
import Screen19 from '../mimos/mimos';
import Screen20 from '../desenvolvimento/desenvolvimento';
import Screen21 from '../desenvolvimento/desenvolvimento-login';
import Screen22 from '../produtos_bancarios/produtosBancarios';
import Screen23 from '../deposito/escolha_transferencia';
import Screen24 from '../deposito/transferencia';
import Screen25 from '../extrato/escolha_extrato';
import Screen26 from '../recarga/recargainicio';
import Screen27 from '../produtos_bancarios/simulador';
import Screen28 from '../servicos/servicos';
import Screen29 from '../chat/chat';
import Screen30 from '../cobrar/cobrar';
import Screen31 from '../beneficios/detalhes';
import Screen32 from '../cambio/cambio';
import Screen33 from '../cambio/e-cambio-pais';
import Screen34 from '../cambio/e-cambio-valor';
import Screen35 from '../cambio/cambio-nenhuma-ordem';
import Screen36 from '../cartoes/solicitar-desbloquear';
import Screen37 from '../qrcode/qrcode';
import Screen38 from '../pagar/escolha_pagamento';
import Screen39 from '../pagar/qr_pagar';
import Screen40 from '../dispositivos/dispositivos';
import Screen41 from '../servicos/aplicativos_rv';
import Screen42 from '../servicos/entretenimento_rv';
import Screen43 from '../servicos/games_rv';
import Screen44 from '../servicos/recarga_rv';
import Screen45 from '../cartoes/ativar_cartao';
import Screen46 from '../cartoes/recarga_cartao';
import Screen47 from '../cartoes/trocar_senha_cartao';
import Screen48 from '../cartoes/bloquear_cartao';
import Screen49 from '../beneficios/selecionar-beneficios';
import Screen50 from '../cartoes/boletotransferencia';
import Screen51 from '../tarifas/pdf';
import Screen52 from '../extrato/extrato_cartao';
import Screen53 from '../comprovantes/escolha_comprovante';
import Screen54 from '../comprovantes/comprovantes_cartao';
import Screen55 from '../beneficios/saude';
import Screen56 from '../beneficios/saude_individual';
import Screen57 from '../cadastro_pf_pj/informativo';
import Screen58 from '../cartoes/tranf_2p2_cartao';
import Screen59 from '../beneficios/saude_familia';
import Screen60 from '../beneficios/odonto';
import Screen61 from '../beneficios/odonto_individual';
import Screen62 from '../beneficios/seguro';
import Screen63 from '../beneficios/seguro_plano1';
import Screen64 from '../beneficios/seguro_plano1_contratar';
import Screen65 from '../beneficios/seguro_plano2';
import Screen66 from '../beneficios/seguro_plano2_contratar';
import Screen67 from '../comprovantes/comprovantes_servicos';
import Screen68 from '../transferencia/escolha-transferencia';
import Screen69 from '../transferencia/transferencia-interna';
import Screen70 from '../maquininha/escolhamaquininha';
import Screen71 from '../maquininha/extrato_maquininha';
import Screen72 from '../produtos_bancarios/tela_escolha_microcredito';
import Screen73 from '../produtos_bancarios/termo_microcredito';
import Screen74 from '../produtos_bancarios/microcredito_ativo';
import Screen75 from '../saque/saque';
import Screen76 from '../produtos_bancarios/investimento_ativo';
import Screen77 from '../produtos_bancarios/simulador_investimento';
import Screen78 from '../produtos_bancarios/tela_escolha_investimento';
import Screen79 from '../extrato/extrato_credito';
import Screen80 from '../extrato/extrato_controle_financeiro';
import Screen81 from '../lojas/lojas';
import Screen82 from '../comprovantes/comprovantes_credito';
import Screen83 from '../dolar_digital/dolar_digital';
import Screen84 from '../programa_pontos/programa_pontos_solicitar';
import Screen85 from '../programa_pontos/programa_pontos_simular';
import Screen86 from './CustomSidebaNotificacao';
import Screen87 from '../indicar_amigo/indicar_amigo';
import Screen88 from '../informe_rendimento/rendimento';
import Screen89 from '../deposito/confreinteligente';
import Screen90 from '../pro_cidades/pro_cidades';
import Screen91 from '../pro_cidades/aceite_termo';
import Screen92 from '../pro_cidades/antecipacao';
import Screen93 from '../pro_cidades/servidor_publico';
import Screen94 from '../gateway/escolha_gateway';
import Screen95 from '../gateway/cadastro_cartao_gateway';
import Screen96 from '../gateway/Simulador_gateway';
import Screen97 from '../gateway/pagar_parcelado';
import Screen98 from '../extrato/extrato_gateway';
import Screen99 from '../comprovantes/comprovantes_gateway';
import Screen100 from '../pet/escolha_planos';
import Screen101 from '../pet/produtos_pet';
import Screen102 from '../pet/tela_escolha_pet';
import Screen103 from '../pet/contratos_pet';
import Screen104 from '../extrato/extrato_investimento';
import Screen105 from '../token_web/token_web';
import Screen106 from '../produtos_bancarios/lista_investimentos';
import Screen107 from '../convenio/tela_escolha_convenio';
import Screen108 from '../convenio/escolha_planos_convenio';
import Screen109 from '../convenio/contratos_convenio';
import Screen110 from '../comprovantes/comprovantes_investimento';


//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import layout_logado from '../../templates/style_logado';

global.currentScreenIndex = 0;



class NavigationDrawerStructure extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mostrar_notificacao: false,
      total_msg: 0,
      hora_anterior: new Date(),

    }
    this.changeScreenOrientation_sair();
  }

  changeScreenOrientation_sair = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };

  toggleDrawer = () => {
    this.changeScreenOrientation_sair();
    this.props.navigationProps.toggleDrawer();
  };

  handleBackButtonClick() {
    this.changeScreenOrientation_sair();
    this.props.navigationProps.goBack(null);
    return true;
  };

  notificacao = async () => {
    this.changeScreenOrientation_sair();
    if (global.mostrar == false) {
      global.mostrar = true;
      this.props.navigationProps.navigate('NavScreen86')
    } else {
      global.mostrar = false;
      this.props.navigationProps.navigate('NavScreen1')
    }

  }

  notificacoes = async () => {

    this.setState({ total_msg: 0, mostrar_notificacao: false });

    var data_de = format(new Date(), 'yyyy-MM-dd');
    var data_ate = format(new Date(), 'yyyy-MM-dd');

    fetch(Info.ip + 'mensagem-conta/lista', {
      method: 'post',
      headers: global.headers,
      body: JSON.stringify({
        conta_id: global.pessoa.conta_id,
        data_de: data_de,
        data_ate: data_ate
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {

        var keys = Object.keys(responseJson);
        var Tamanho_key = keys.length;

        if (Tamanho_key > 0) {
          for (var i = 0; i < Tamanho_key; i++) {
            if (responseJson[i].status == 0) {
              this.setState({ total_msg: this.state.total_msg + 1, mostrar_notificacao: true })
            }

          }
        } else {
          this.setState({ total_msg: 0, mostrar_notificacao: false })
        }

      })
      .catch((error) => {
        console.error(error);
      });

  };

  onAction = () => {
    var hora_acao = new Date();
    var hora_ini = hora_acao.getMinutes();
    var hora_ant = this.state.hora_anterior.getMinutes();
    var minutos = hora_ini - hora_ant;

    if (minutos >= 5) {
      Alert.alert('Sua sessão expirou!', 'Por favor logue novamente.');
      this.props.navigationProps.navigate("login");
    } else {
      this.setState({ hora_anterior: hora_acao });
    }
  };

  render() {

    return (
      <SafeAreaView style={{ backgroundColor: Objetos.cor_statusbar }} edges={['top',]}>
        <View style={layout_logado.styles.barra_superior} onTouchStart={() => this.onAction()}>

          <NavigationEvents
            onWillFocus={payload => {
              this.setState({ hora_anterior: new Date() });
              this.notificacoes();
            }}
          />

          {
            global.rota_nome === '' ?
              <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => this.notificacao()} style={{
                  left: 15, position: 'absolute', justifyContent: 'center',
                  alignItems: 'center',
                }}>

                <View style={{ marginLeft: 5 }}>
                  {/*  <Icon type="ionicon" name="ios-notifications-outline" size={28} color={layout_logado.icones_menu} /> */}
                  {icones.notificacoes}
                </View>

                {this.state.mostrar_notificacao ? (<Badge
                  value={this.state.total_msg}
                  status="error"
                  containerStyle={{
                    position: 'absolute',
                    top: -4,
                    right: -4
                  }}
                />) : null}

              </TouchableOpacity>
              :
              <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                onPress={() => { this.props.navigationProps.navigate(global.rota_nome) }} style={{
                  left: 15, position: 'absolute', justifyContent: 'center',
                  alignItems: 'center',
                }}>

                <View style={{ marginLeft: 5 }}>
                  <Icone name="chevron-left" size={25} color={layout_logado.icones_menu} />
                  {/*  {icones.deposito} */}
                </View>

              </TouchableOpacity>
          }

          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={this.handleBackButtonClick.bind(this)}>
            {Objetos.logoimg}
          </TouchableOpacity>

          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={this.toggleDrawer.bind(this)} style={{
              right: 15, position: 'absolute', justifyContent: 'center',
              alignItems: 'center', flexDirection: 'row',
            }}>
            {/*  <Icon type="ionicon" name="ios-menu" size={35} color={layout_logado.icones_menu} /> */}
            {icones.menu}

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}


const Screen1_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />
    }),
  },
});


const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen5_StackNavigator = createStackNavigator({
  Fifth: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />
    }),
  },
});


const Screen6_StackNavigator = createStackNavigator({
  Sixth: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});


const Screen7_StackNavigator = createStackNavigator({
  Seventh: {
    screen: Screen7,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen8_StackNavigator = createStackNavigator({
  Eighth: {
    screen: Screen8,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});


const Screen9_StackNavigator = createStackNavigator({
  Ninth: {
    screen: Screen9,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen10_StackNavigator = createStackNavigator({
  Tenth: {
    screen: Screen10,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen11_StackNavigator = createStackNavigator({
  Eleventh: {
    screen: Screen11,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen12_StackNavigator = createStackNavigator({
  Twelfth: {
    screen: Screen12,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
});

const Screen13_StackNavigator = createStackNavigator({
  Thirteenth: {
    screen: Screen13,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const Screen14_StackNavigator = createStackNavigator({
  Fourteenth: {
    screen: Screen14,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const Screen15_StackNavigator = createStackNavigator({
  Fifteenth: {
    screen: Screen15,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const Screen16_StackNavigator = createStackNavigator({
  Sixteenth: {
    screen: Screen16,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const Screen17_StackNavigator = createStackNavigator({
  Seventeenth: {
    screen: Screen17,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },

});

const Screen18_StackNavigator = createStackNavigator({
  Eighteenth: {
    screen: Screen18,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),


  },

});

const Screen19_StackNavigator = createStackNavigator({
  Nineteenth: {
    screen: Screen19,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen20_StackNavigator = createStackNavigator({
  Twentieth: {
    screen: Screen20,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen21_StackNavigator = createStackNavigator({
  Twentieth: {
    screen: Screen21,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen22_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen22,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen23_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen23,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen24_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen24,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen25_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen25,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen26_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen26,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen27_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen27,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen28_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen28,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen29_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen29,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen30_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen30,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen31_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen31,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen32_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen32,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen33_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen33,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen34_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen34,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen35_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen35,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen36_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen36,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen37_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen37,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen38_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen38,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen39_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen39,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen40_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen40,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen41_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen41,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen42_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen42,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen43_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen43,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen44_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen44,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen45_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen45,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen46_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen46,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen47_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen47,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen48_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen48,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen49_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen49,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen50_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen50,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen51_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen51,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen52_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen52,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen53_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen53,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen54_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen54,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen55_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen55,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen56_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen56,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen57_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen57,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen58_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen58,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen59_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen59,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen60_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen60,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen61_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen61,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen62_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen62,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen63_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen63,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen64_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen64,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen65_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen65,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen66_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen66,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen67_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen67,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen68_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen68,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen69_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen69,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen70_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen70,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen71_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen71,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen72_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen72,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen73_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen73,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen74_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen74,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen75_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen75,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen76_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen76,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen77_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen77,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen78_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen78,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen79_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen79,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen80_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen80,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen81_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen81,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen82_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen82,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen83_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen83,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen84_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen84,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen85_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen85,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen86_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen86,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen87_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen87,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen88_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen88,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen89_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen89,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen90_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen90,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen91_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen91,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen92_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen92,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen93_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen93,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen94_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen94,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen95_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen95,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen96_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen96,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen97_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen97,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen98_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen98,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen99_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen99,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen100_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen100,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen101_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen101,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen102_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen102,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen103_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen103,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen104_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen104,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen105_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen105,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen106_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen106,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});


const Screen107_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen107,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen108_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen108,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});
const Screen109_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen109,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});

const Screen110_StackNavigator = createStackNavigator({
  TwentiethSecond: {
    screen: Screen110,
    navigationOptions: ({ navigation }) => ({
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }),

  },

});




const DrawerNavigatorExample = createDrawerNavigator({
  NavScreen1: {
    screen: Screen1_StackNavigator,
  },
  NavScreen2: {
    screen: Screen2_StackNavigator,
  },
  NavScreen3: {
    screen: Screen3_StackNavigator,
  },
  NavScreen4: {
    screen: Screen4_StackNavigator,
  },
  NavScreen5: {
    screen: Screen5_StackNavigator,
  },
  NavScreen6: {
    screen: Screen6_StackNavigator,
  },
  NavScreen7: {
    screen: Screen7_StackNavigator,
  },
  NavScreen8: {
    screen: Screen8_StackNavigator,
  },
  NavScreen9: {
    screen: Screen9_StackNavigator,
  },
  NavScreen10: {
    screen: Screen10_StackNavigator,
  },
  NavScreen11: {
    screen: Screen11_StackNavigator,
  },
  NavScreen12: {
    screen: Screen12_StackNavigator,
  },
  NavScreen13: {
    screen: Screen13_StackNavigator,
  },
  NavScreen14: {
    screen: Screen14_StackNavigator,
  },
  NavScreen15: {
    screen: Screen15_StackNavigator,
  },
  NavScreen16: {
    screen: Screen16_StackNavigator,
  },
  NavScreen17: {
    screen: Screen17_StackNavigator,
  },
  NavScreen18: {
    screen: Screen18_StackNavigator,
  },
  NavScreen19: {
    screen: Screen19_StackNavigator,
  },
  NavScreen20: {
    screen: Screen20_StackNavigator,
  },
  NavScreen21: {
    screen: Screen21_StackNavigator,
  },
  NavScreen22: {
    screen: Screen22_StackNavigator,
  },
  NavScreen23: {
    screen: Screen23_StackNavigator,
  },
  NavScreen24: {
    screen: Screen24_StackNavigator,
  },
  NavScreen25: {
    screen: Screen25_StackNavigator,
  },
  NavScreen26: {
    screen: Screen26_StackNavigator,
  },
  NavScreen27: {
    screen: Screen27_StackNavigator,
  },
  NavScreen28: {
    screen: Screen28_StackNavigator,
  },
  NavScreen29: {
    screen: Screen29_StackNavigator,
  },
  NavScreen30: {
    screen: Screen30_StackNavigator,
  },
  NavScreen31: {
    screen: Screen31_StackNavigator,
  },
  NavScreen32: {
    screen: Screen32_StackNavigator,
  },
  NavScreen33: {
    screen: Screen33_StackNavigator,
  },
  NavScreen34: {
    screen: Screen34_StackNavigator,
  },
  NavScreen35: {
    screen: Screen35_StackNavigator,
  },
  NavScreen36: {
    screen: Screen36_StackNavigator,
  },
  NavScreen37: {
    screen: Screen37_StackNavigator,
  },
  NavScreen38: {
    screen: Screen38_StackNavigator,
  },
  NavScreen39: {
    screen: Screen39_StackNavigator,
  },
  NavScreen40: {
    screen: Screen40_StackNavigator,
  },
  NavScreen41: {
    screen: Screen41_StackNavigator,
  },
  NavScreen42: {
    screen: Screen42_StackNavigator,
  },
  NavScreen43: {
    screen: Screen43_StackNavigator,
  },
  NavScreen44: {
    screen: Screen44_StackNavigator,
  },
  NavScreen45: {
    screen: Screen45_StackNavigator,
  },
  NavScreen46: {
    screen: Screen46_StackNavigator,
  },
  NavScreen47: {
    screen: Screen47_StackNavigator,
  },
  NavScreen48: {
    screen: Screen48_StackNavigator,
  },
  NavScreen49: {
    screen: Screen49_StackNavigator,
  },
  NavScreen50: {
    screen: Screen50_StackNavigator,
  },
  NavScreen51: {
    screen: Screen51_StackNavigator,
  },
  NavScreen52: {
    screen: Screen52_StackNavigator,
  },
  NavScreen53: {
    screen: Screen53_StackNavigator,
  },
  NavScreen54: {
    screen: Screen54_StackNavigator,
  },
  NavScreen55: {
    screen: Screen55_StackNavigator,
  },
  NavScreen56: {
    screen: Screen56_StackNavigator,
  },
  NavScreen57: {
    screen: Screen57_StackNavigator,
  },
  NavScreen58: {
    screen: Screen58_StackNavigator,
  },
  NavScreen59: {
    screen: Screen59_StackNavigator,
  },
  NavScreen60: {
    screen: Screen60_StackNavigator,
  },
  NavScreen61: {
    screen: Screen61_StackNavigator,
  },
  NavScreen62: {
    screen: Screen62_StackNavigator,
  },
  NavScreen63: {
    screen: Screen63_StackNavigator,
  },
  NavScreen64: {
    screen: Screen64_StackNavigator,
  },
  NavScreen65: {
    screen: Screen65_StackNavigator,
  },
  NavScreen66: {
    screen: Screen66_StackNavigator,
  },
  NavScreen67: {
    screen: Screen67_StackNavigator,
  },
  NavScreen68: {
    screen: Screen68_StackNavigator,
  },
  NavScreen69: {
    screen: Screen69_StackNavigator,
  },
  NavScreen70: {
    screen: Screen70_StackNavigator,
  },
  NavScreen71: {
    screen: Screen71_StackNavigator,
  },
  NavScreen72: {
    screen: Screen72_StackNavigator,
  },
  NavScreen73: {
    screen: Screen73_StackNavigator,
  },
  NavScreen74: {
    screen: Screen74_StackNavigator,
  },
  NavScreen75: {
    screen: Screen75_StackNavigator,
  },
  NavScreen76: {
    screen: Screen76_StackNavigator,
  },
  NavScreen77: {
    screen: Screen77_StackNavigator,
  },
  NavScreen78: {
    screen: Screen78_StackNavigator,
  },
  NavScreen79: {
    screen: Screen79_StackNavigator,
  },
  NavScreen80: {
    screen: Screen80_StackNavigator,
  },
  NavScreen81: {
    screen: Screen81_StackNavigator,
  },
  NavScreen82: {
    screen: Screen82_StackNavigator,
  },
  NavScreen83: {
    screen: Screen83_StackNavigator,
  },
  NavScreen84: {
    screen: Screen84_StackNavigator,
  },
  NavScreen85: {
    screen: Screen85_StackNavigator,
  },
  NavScreen86: {
    screen: Screen86_StackNavigator,
  },
  NavScreen87: {
    screen: Screen87_StackNavigator,
  },
  NavScreen88: {
    screen: Screen88_StackNavigator,
  },
  NavScreen89: {
    screen: Screen89_StackNavigator,
  },
  NavScreen90: {
    screen: Screen90_StackNavigator,
  },
  NavScreen91: {
    screen: Screen91_StackNavigator,
  },
  NavScreen92: {
    screen: Screen92_StackNavigator,
  },
  NavScreen93: {
    screen: Screen93_StackNavigator,
  },
  NavScreen94: {
    screen: Screen94_StackNavigator,
  },
  NavScreen95: {
    screen: Screen95_StackNavigator,
  },
  NavScreen96: {
    screen: Screen96_StackNavigator,
  },
  NavScreen97: {
    screen: Screen97_StackNavigator,
  },
  NavScreen98: {
    screen: Screen98_StackNavigator,
  },
  NavScreen99: {
    screen: Screen99_StackNavigator,
  },
  NavScreen100: {
    screen: Screen100_StackNavigator,
  },
  NavScreen101: {
    screen: Screen101_StackNavigator,
  },
  NavScreen102: {
    screen: Screen102_StackNavigator,
  },
  NavScreen103: {
    screen: Screen103_StackNavigator,
  },
  NavScreen104: {
    screen: Screen104_StackNavigator,
  },
  NavScreen105: {
    screen: Screen105_StackNavigator,
  },
  NavScreen106: {
    screen: Screen106_StackNavigator,
  },
  NavScreen107: {
    screen: Screen107_StackNavigator,
  },
  NavScreen108: {
    screen: Screen108_StackNavigator,
  },
  NavScreen109: {
    screen: Screen109_StackNavigator,
  },

  NavScreen110: {
    screen: Screen110_StackNavigator,
  },



},
  {
    drawerPosition: 'right',
    resetOnBlur: true,
    //menu da barra lateral personalizada, precisamos fornecer o  CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar tamanho
    drawerWidth: Dimensions.get('window').width - 150,
  }

);
export default createAppContainer(DrawerNavigatorExample);