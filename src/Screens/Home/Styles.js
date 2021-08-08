import { StyleSheet } from 'react-native';
import Color from '../../constants/Color';

const Styles = StyleSheet.create({
  homeContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Color.main,
    width: '100%',
  },
  balanceCard: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
    height: 180,
    elevation: 1,
    // borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    backgroundColor: '#fff',
  },

  balanceRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  circleRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },

  circleColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: Color.primary,
    margin: 5,
    overflow: 'hidden',
  },

  recent: {
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: Color.bgWhite,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    height: 300,
    padding: 10,
  },

  transaction: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  transactionHeader: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },

  tTxtHeader: {
    fontWeight: '400',
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
    marginLeft: 10,
  },

  tTxt1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
  },

  tTxt2: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  tTxt3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.secondary,
  },

  transactionColumn: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  label1: {
    fontSize: 18,
  },
  label2: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: Color.secondary,
  },
  label3: {
    color: Color.txtFaint,
  },

  homeRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  service: {
    width: '100%',
    alignItems: 'center',
  },
  serviceCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginRight: 10,
    height: 90,
    width: 90,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    backgroundColor: '#fff',
  },
  serviceTxtRow: {
    width: '95%',
    alignItems: 'flex-start',
  },
  serviceTxt: {
    fontSize: 16,
    textAlign: 'center',
  },
  serviceTxt2: {
    fontSize: 18,
  },
  rippleLogo: {
    width: 50,
    height: 50,
  },
});

export default Styles;
