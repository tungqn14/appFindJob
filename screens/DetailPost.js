import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlockPost from '../component/BlockPost';
import {
    Dimensions,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';

export default function DetailPost({onPress,text,titlePost,address,wage}) {

    return (
        <ScrollView style={{flex:1,height:"100%"}}>
        <View style={styles.container}>
        <View style={styles.topDetailPost}>
            <Text style={styles.titleDetailPost}>Tuyển dụng lập trình viên PHP và REACT NATIVE</Text>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Tên Công Ty:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>Công ty tnhh một thành viên long thành hoặc một cái gì đấy tương tự nhưng bạn không biét</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Mức Lương:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>5.000.000 VND</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Nơi làm việc:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>Hà Nội</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Hạn tuyển:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>16/10/2021</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Yêu cầu:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>Có hiểu biết tốt về những mẫu kiến trúc công nghệ và thiết kế công nghệ phổ biến
Có kinh nghiệm thiết kế và triển khai kiến ​​trúc theo tiêu chuẩn của ngành và thông lệ tốt nhất của AWS
Có kinh nghiệm chuyển dịch công việc từ mô hình lưu trữ tại chỗ lên đám mây là một lợi thế
Có kinh nghiệm sử dụng phương pháp làm việc Agile và DevOps
Có kinh nghiệm sử dụng dịch vụ AWS để phát triển microservice cho Website/Di động, cụ thể là: Dữ liệu và Phân tích, Thiết kế & quản lý API, Mạng lưới & Bảo mật, DevOps
Có kinh nghiệm thiết kế và phát triển microservice trên Kubernetes và/hoặc Cloud và kinh nghiệm về mảng Tài chính/Ngân hàng là một lợi thế
Có thể chỉnh sửa trực tiếp code hiện có để tích hợp phần mềm mới vào hệ thống hiện có</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Mô tả:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>Tham gia vào quá trình thiết kế tổng thể Cơ sở Hạ tầng Đám mây và hệ thống DevOps
Làm việc với người dùng từ đơn vị kinh doanh/nghiệp vụ và quản lý để đưa ra các giải pháp kỹ thuật; đánh giá rủi ro kỹ thuật và bảo mật và vạch ra chiến lược giảm thiểu thiệt hại
Làm việc chặt chẽ với Kiến trúc sư doanh nghiệp để đáp ứng các tiêu chuẩn phát triển nội bộ
Nghiên cứu, phân tích và đánh giá công nghệ & giải pháp để đáp ứng các yêu cầu kinh doanh
Thiết kế quy trình phát triển và quy trình làm việc để hoạt động thống nhất với DevOps; thiết kế và tối ưu hóa ứng dụng và kiến ​​trúc cơ sở hạ tầng để đáp ứng các yêu cầu về chức năng, độ tin cậy và thời gian khả dụng
Cung cấp kiến thức về các hệ thống liên quan đến sản phẩm Hành trình khách hàng và trực tiếp thay đổi mã nguồn, tích hợp các tính năng/mô-đun mới vào hệ thống hiện tại khi cần thiết
Phối hợp với Chuyên viên phân tích nghiệp vụ, thực hiện k</Text>
            </View>
         
        </View>
            <View style={styles.botDetailPost}>
            <TouchableOpacity style={[styles.btnApply,{backgroundColor:"white",borderColor:"blue"}]}>
                  <Text style={{color:"blue",fontSize:15,textTransform:"uppercase"}}>Lưu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnApply,{backgroundColor:"#e24c32",}]}>
                  <Text style={{color:"white",fontSize:15,textTransform:"uppercase"}}>Ứng tuyển</Text>
              </TouchableOpacity>
            </View>
           
        </View>
        </ScrollView>
       
    )
}
const styles = StyleSheet.create({
  
   container:{
    flex:1,
    height:"100%",
    justifyContent:"space-between",
   // backgroundColor:"#9e9e9e29",
   flexWrap:"wrap",
    flexDirection:"column",
   },
   topDetailPost:{
        borderTopColor:"gray",
        padding:15,
        height:"70%",
        width:"100%",
      
        flexBasis:"70%",
   },
   btnApply:{
        borderColor:"gray",
        borderWidth:1,
        width:150,
        padding: 10,
        alignItems:"center",
        borderRadius:5,
        marginHorizontal:5,
        
   },
    botDetailPost:{
        padding:15,
        flexDirection:"row",
        height:"25%",
        width:"100%",
        flexBasis:"25%",
       
    },
    titleDetailPost:{
        fontSize:18,
        fontWeight:"bold"
    },
    // inforDetail:{
    //     shadowOffset:{  width: 10,  height: 10,  },
    //     shadowColor: 'black',
    //     shadowOpacity: 1.0,
    //     borderWidth:1,
    //     backgroundColor:"white",
    //     borderColor:"gray"
    // },
    // wrapLine:{
    //    paddingHorizontal:10,
    //     width:"100%",
    //     marginVertical:10,
    //     borderBottomWidth:1,
    //     paddingBottom:10,
    //     borderColor:"#80808024",
    //     marginBottom:10
    // }
    });