import React from "react";

const CountrySelect: React.FC<any> = ({
  countrySelect,
  setCountrySelect,
}: any) => {
  return (
    <>
      <select
        value={countrySelect}
        onChange={setCountrySelect}
        className="form-select text-gray-700"
      >
        <option value="231">
          &#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
          &#x10E8;&#x10D4;&#x10D4;&#x10E0;&#x10D7;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
          &#x10E8;&#x10E2;&#x10D0;&#x10E2;&#x10D4;&#x10D1;&#x10D8; (United
          States)
        </option>
        <option value="39">
          &#x10D9;&#x10D0;&#x10DC;&#x10D0;&#x10D3;&#x10D0; (Canada)
        </option>
        <option value="230">
          &#x10D2;&#x10D0;&#x10D4;&#x10E0;&#x10D7;&#x10D8;&#x10D0;&#x10DC;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
          &#x10E1;&#x10D0;&#x10DB;&#x10D4;&#x10E4;&#x10DD; (United Kingdom)
        </option>
        <option value="105">
          &#x10D8;&#x10E0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
          (Ireland)
        </option>
        <option value="14">
          &#x10D0;&#x10D5;&#x10E1;&#x10E2;&#x10E0;&#x10D0;&#x10DA;&#x10D8;&#x10D0;
          (Australia)
        </option>
        <option value="158">
          &#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
          &#x10D6;&#x10D4;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0; (New
          Zealand)
        </option>
        <option value="202">
          &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
          &#x10D0;&#x10E4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
          &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
          (South Africa)
        </option>
        <option value="81">
          &#x10D2;&#x10D4;&#x10E0;&#x10DB;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
          (Deutschland)
        </option>
        <option value="-----------">-----------</option>
        <option value="496">
          &#x10E1;&#x10EE;&#x10D5;&#x10D0;&#x10D3;&#x10D0;&#x10E1;&#x10EE;&#x10D5;&#x10D0;
          &#x10D0;&#x10D3;&#x10D2;&#x10D8;&#x10DA;&#x10D0;&#x10E1;
        </option>
        <option value="-1">
          &#x10D0;&#x10E0; &#x10D0;&#x10E0;&#x10D8;&#x10E1;
          &#x10EE;&#x10D4;&#x10DA;&#x10DB;&#x10D8;&#x10E1;&#x10D0;&#x10EC;&#x10D5;&#x10D3;&#x10DD;&#x10DB;&#x10D8;
        </option>
        <option value="1">
          &#x10D0;&#x10D5;&#x10E6;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (&#x202B;&#x627;&#x641;&#x63A;&#x627;&#x646;&#x633;&#x62A;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="2">
          &#x10D0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (&#xC5;land)
        </option>
        <option value="3">
          &#x10D0;&#x10DA;&#x10D1;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Shqip&#xEB;ri)
        </option>
        <option value="4">
          &#x10D0;&#x10DA;&#x10DF;&#x10D8;&#x10E0;&#x10D8; (Algeria)
        </option>
        <option value="5">
          &#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
          &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10D0; (American Samoa)
        </option>
        <option value="6">
          &#x10D0;&#x10DC;&#x10D3;&#x10DD;&#x10E0;&#x10D0; (Andorra)
        </option>
        <option value="7">
          &#x10D0;&#x10DC;&#x10D2;&#x10DD;&#x10DA;&#x10D0; (Angola)
        </option>
        <option value="8">
          &#x10D0;&#x10DC;&#x10D2;&#x10D5;&#x10D8;&#x10DA;&#x10D0; (Anguilla)
        </option>
        <option value="9">
          &#x10D0;&#x10DC;&#x10E2;&#x10D0;&#x10E0;&#x10E5;&#x10E2;&#x10D8;&#x10D9;&#x10D0;
          (Antarctica)
        </option>
        <option value="10">
          &#x10D0;&#x10DC;&#x10E2;&#x10D8;&#x10D2;&#x10E3;&#x10D0;
          &#x10D3;&#x10D0;
          &#x10D1;&#x10D0;&#x10E0;&#x10D1;&#x10E3;&#x10D3;&#x10D0; (Antigua
          &amp; Barbuda)
        </option>
        <option value="11">
          &#x10D0;&#x10E0;&#x10D2;&#x10D4;&#x10DC;&#x10E2;&#x10D8;&#x10DC;&#x10D0;
          (Argentina)
        </option>
        <option value="12">
          &#x10E1;&#x10DD;&#x10DB;&#x10EE;&#x10D4;&#x10D7;&#x10D8;
          (&#x540;&#x561;&#x575;&#x561;&#x57D;&#x57F;&#x561;&#x576;)
        </option>
        <option value="13">
          &#x10D0;&#x10E0;&#x10E3;&#x10D1;&#x10D0; (Aruba)
        </option>
        <option value="15">
          &#x10D0;&#x10D5;&#x10E1;&#x10E2;&#x10E0;&#x10D8;&#x10D0;
          (&#xD6;sterreich)
        </option>
        <option value="16">
          &#x10D0;&#x10D6;&#x10D4;&#x10E0;&#x10D1;&#x10D0;&#x10D8;&#x10EF;&#x10D0;&#x10DC;&#x10D8;
          (Az&#x259;rbaycan)
        </option>
        <option value="17">
          &#x10D1;&#x10D0;&#x10F0;&#x10D0;&#x10DB;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Bahamas)
        </option>
        <option value="18">
          &#x10D1;&#x10D0;&#x10F0;&#x10E0;&#x10D4;&#x10D8;&#x10DC;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x628;&#x62D;&#x631;&#x64A;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="19">
          &#x10D1;&#x10D0;&#x10DC;&#x10D2;&#x10DA;&#x10D0;&#x10D3;&#x10D4;&#x10E8;&#x10D8;
          (&#x9AC;&#x9BE;&#x982;&#x9B2;&#x9BE;&#x9A6;&#x9C7;&#x9B6;)
        </option>
        <option value="20">
          &#x10D1;&#x10D0;&#x10E0;&#x10D1;&#x10D0;&#x10D3;&#x10DD;&#x10E1;&#x10D8;
          (Barbados)
        </option>
        <option value="21">
          &#x10D1;&#x10D4;&#x10DA;&#x10D0;&#x10E0;&#x10E3;&#x10E1;&#x10D8;
          (&#x411;&#x435;&#x43B;&#x430;&#x440;&#x443;&#x441;&#x44C;)
        </option>
        <option value="22">
          &#x10D1;&#x10D4;&#x10DA;&#x10D2;&#x10D8;&#x10D0; (Belgium)
        </option>
        <option value="23">
          &#x10D1;&#x10D4;&#x10DA;&#x10D8;&#x10D6;&#x10D8; (Belize)
        </option>
        <option value="24">
          &#x10D1;&#x10D4;&#x10DC;&#x10D8;&#x10DC;&#x10D8; (B&#xE9;nin)
        </option>
        <option value="25">
          &#x10D1;&#x10D4;&#x10E0;&#x10DB;&#x10E3;&#x10D3;&#x10D0; (Bermuda)
        </option>
        <option value="26">
          &#x10D1;&#x10E3;&#x10E2;&#x10D0;&#x10DC;&#x10D8;
          (&#xF60;&#xF56;&#xFB2;&#xF74;&#xF42;)
        </option>
        <option value="27">
          &#x10D1;&#x10DD;&#x10DA;&#x10D8;&#x10D5;&#x10D8;&#x10D0; (Bolivia)
        </option>
        <option value="28">
          &#x10D1;&#x10DD;&#x10E1;&#x10DC;&#x10D8;&#x10D0; &#x10D3;&#x10D0;
          &#x10F0;&#x10D4;&#x10E0;&#x10EA;&#x10D4;&#x10D2;&#x10DD;&#x10D5;&#x10D8;&#x10DC;&#x10D0;
          (&#x411;&#x43E;&#x441;&#x43D;&#x430; &#x438;
          &#x425;&#x435;&#x440;&#x446;&#x435;&#x433;&#x43E;&#x432;&#x438;&#x43D;&#x430;)
        </option>
        <option value="29">
          &#x10D1;&#x10DD;&#x10E2;&#x10E1;&#x10D5;&#x10D0;&#x10DC;&#x10D0;
          (Botswana)
        </option>
        <option value="30">
          &#x10D1;&#x10E3;&#x10D5;&#x10D4; (Bouvet Island)
        </option>
        <option value="31">
          &#x10D1;&#x10E0;&#x10D0;&#x10D6;&#x10D8;&#x10DA;&#x10D8;&#x10D0;
          (Brasil)
        </option>
        <option value="32">
          &#x10D1;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10E2;&#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10DD;&#x10E0;&#x10D8;&#x10D0;
          &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10DD;&#x10D9;&#x10D4;&#x10D0;&#x10DC;&#x10D4;&#x10E8;&#x10D8;
          (British Indian Ocean Territory)
        </option>
        <option value="33">
          &#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D8; (Brunei)
        </option>
        <option value="34">
          &#x10D1;&#x10E3;&#x10DA;&#x10D2;&#x10D0;&#x10E0;&#x10D4;&#x10D7;&#x10D8;
          (&#x411;&#x44A;&#x43B;&#x433;&#x430;&#x440;&#x438;&#x44F;)
        </option>
        <option value="35">
          &#x10D1;&#x10E3;&#x10E0;&#x10D9;&#x10D8;&#x10DC;&#x10D0;-&#x10E4;&#x10D0;&#x10E1;&#x10DD;
          (Burkina Faso)
        </option>
        <option value="36">
          &#x10D1;&#x10E3;&#x10E0;&#x10E3;&#x10DC;&#x10D3;&#x10D8; (Uburundi)
        </option>
        <option value="37">
          &#x10D9;&#x10D0;&#x10DB;&#x10D1;&#x10DD;&#x10EF;&#x10D0;
          (&#x1780;&#x1798;&#x17D2;&#x1796;&#x17BB;&#x1787;&#x17B6;)
        </option>
        <option value="38">
          &#x10D9;&#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10E3;&#x10DC;&#x10D8;
          (Cameroun)
        </option>
        <option value="40">
          &#x10D9;&#x10D0;&#x10D1;&#x10DD;-&#x10D5;&#x10D4;&#x10E0;&#x10D3;&#x10D4;
          (Kabu Verdi)
        </option>
        <option value="41">
          &#x10D9;&#x10D0;&#x10D8;&#x10DB;&#x10D0;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Cayman Islands)
        </option>
        <option value="42">
          &#x10EA;&#x10D4;&#x10DC;&#x10E2;&#x10E0;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
          &#x10D0;&#x10E4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
          &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
          (R&#xE9;publique centrafricaine)
        </option>
        <option value="43">&#x10E9;&#x10D0;&#x10D3;&#x10D8; (Tchad)</option>
        <option value="44">&#x10E9;&#x10D8;&#x10DA;&#x10D4; (Chile)</option>
        <option value="45">
          &#x10E9;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8; (&#x4E2D;&#x56FD;)
        </option>
        <option value="46">
          &#x10E8;&#x10DD;&#x10D1;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8; (Christmas
          Island)
        </option>
        <option value="47">
          &#x10E5;&#x10DD;&#x10E5;&#x10DD;&#x10E1;&#x10D8;&#x10E1;
          (&#x10D9;&#x10D8;&#x10DA;&#x10D8;&#x10DC;&#x10D2;&#x10D8;&#x10E1;)
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Kepulauan Cocos (Keeling))
        </option>
        <option value="48">
          &#x10D9;&#x10DD;&#x10DA;&#x10E3;&#x10DB;&#x10D1;&#x10D8;&#x10D0;
          (Colombia)
        </option>
        <option value="49">
          &#x10D9;&#x10DD;&#x10DB;&#x10DD;&#x10E0;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (&#x202B;&#x62C;&#x632;&#x631;
          &#x627;&#x644;&#x642;&#x645;&#x631;&#x202C;&#x200E;)
        </option>
        <option value="50">
          &#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10DD; -
          &#x10D1;&#x10E0;&#x10D0;&#x10D6;&#x10D0;&#x10D5;&#x10D8;&#x10DA;&#x10D8;
          (Congo-Brazzaville)
        </option>
        <option value="51">
          &#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10DD; -
          &#x10D9;&#x10D8;&#x10DC;&#x10E8;&#x10D0;&#x10E1;&#x10D0; (Jamhuri ya
          Kidemokrasia ya Kongo)
        </option>
        <option value="52">
          &#x10D9;&#x10E3;&#x10D9;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Cook Islands)
        </option>
        <option value="53">
          &#x10D9;&#x10DD;&#x10E1;&#x10E2;&#x10D0;-&#x10E0;&#x10D8;&#x10D9;&#x10D0;
          (Costa Rica)
        </option>
        <option value="54">
          &#x10D9;&#x10DD;&#x10E2;-&#x10D3;&#x10D8;&#x10D5;&#x10E3;&#x10D0;&#x10E0;&#x10D8;
          (C&#xF4;te d&#x2019;Ivoire)
        </option>
        <option value="55">
          &#x10EE;&#x10DD;&#x10E0;&#x10D5;&#x10D0;&#x10E2;&#x10D8;&#x10D0;
          (Hrvatska)
        </option>
        <option value="56">&#x10D9;&#x10E3;&#x10D1;&#x10D0; (Cuba)</option>
        <option value="57">
          &#x10D9;&#x10D5;&#x10D8;&#x10DE;&#x10E0;&#x10DD;&#x10E1;&#x10D8;
          (&#x39A;&#x3CD;&#x3C0;&#x3C1;&#x3BF;&#x3C2;)
        </option>
        <option value="58">
          &#x10E9;&#x10D4;&#x10EE;&#x10D4;&#x10D7;&#x10D8; (&#x10C;esko)
        </option>
        <option value="59">
          &#x10D3;&#x10D0;&#x10DC;&#x10D8;&#x10D0; (Danmark)
        </option>
        <option value="60">
          &#x10EF;&#x10D8;&#x10D1;&#x10E3;&#x10E2;&#x10D8; (Djibouti)
        </option>
        <option value="61">
          &#x10D3;&#x10DD;&#x10DB;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D0;
          (Dominica)
        </option>
        <option value="62">
          &#x10D3;&#x10DD;&#x10DB;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D4;&#x10DA;&#x10D7;&#x10D0;
          &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
          (Rep&#xFA;blica Dominicana)
        </option>
        <option value="63">
          &#x10D4;&#x10D9;&#x10D5;&#x10D0;&#x10D3;&#x10DD;&#x10E0;&#x10D8;
          (Ecuador)
        </option>
        <option value="64">
          &#x10D4;&#x10D2;&#x10D5;&#x10D8;&#x10DE;&#x10E2;&#x10D4;
          (&#x202B;&#x645;&#x635;&#x631;&#x202C;&#x200E;)
        </option>
        <option value="65">
          &#x10E1;&#x10D0;&#x10DA;&#x10D5;&#x10D0;&#x10D3;&#x10DD;&#x10E0;&#x10D8;
          (El Salvador)
        </option>
        <option value="66">
          &#x10D4;&#x10D9;&#x10D5;&#x10D0;&#x10E2;&#x10DD;&#x10E0;&#x10E3;&#x10DA;&#x10D8;
          &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0; (Guinea Ecuatorial)
        </option>
        <option value="67">
          &#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10E0;&#x10D4;&#x10D0; (Eritrea)
        </option>
        <option value="68">
          &#x10D4;&#x10E1;&#x10E2;&#x10DD;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Eesti)
        </option>
        <option value="69">
          &#x10D4;&#x10D7;&#x10D8;&#x10DD;&#x10DE;&#x10D8;&#x10D0; (Ethiopia)
        </option>
        <option value="70">
          &#x10E4;&#x10DD;&#x10DA;&#x10D9;&#x10DA;&#x10D4;&#x10DC;&#x10D3;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Falkland Islands (Islas Malvinas))
        </option>
        <option value="71">
          &#x10E4;&#x10D0;&#x10E0;&#x10D4;&#x10E0;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (F&#xF8;royar)
        </option>
        <option value="72">&#x10E4;&#x10D8;&#x10EF;&#x10D8; (Fiji)</option>
        <option value="73">
          &#x10E4;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8; (Suomi)
        </option>
        <option value="74">
          &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;
          (France)
        </option>
        <option value="75">
          &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10D2;&#x10D5;&#x10D8;&#x10D0;&#x10DC;&#x10D0; (Guyane
          fran&#xE7;aise)
        </option>
        <option value="76">
          &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10DE;&#x10DD;&#x10DA;&#x10D8;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
          (Polyn&#xE9;sie fran&#xE7;aise)
        </option>
        <option value="77">
          &#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10E3;&#x10DA;&#x10D8;
          &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10E2;&#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10DD;&#x10E0;&#x10D8;&#x10D4;&#x10D1;&#x10D8;
          (Terres australes fran&#xE7;aises)
        </option>
        <option value="78">
          &#x10D2;&#x10D0;&#x10D1;&#x10DD;&#x10DC;&#x10D8; (Gabon)
        </option>
        <option value="79">
          &#x10D2;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D0; (Gambia)
        </option>
        <option selected value="GE">
          &#x10E1;&#x10D0;&#x10E5;&#x10D0;&#x10E0;&#x10D7;&#x10D5;&#x10D4;&#x10DA;&#x10DD;
        </option>
        <option value="82">&#x10D2;&#x10D0;&#x10DC;&#x10D0; (Gaana)</option>
        <option value="83">
          &#x10D2;&#x10D8;&#x10D1;&#x10E0;&#x10D0;&#x10DA;&#x10E2;&#x10D0;&#x10E0;&#x10D8;
          (Gibraltar)
        </option>
        <option value="84">
          &#x10E1;&#x10D0;&#x10D1;&#x10D4;&#x10E0;&#x10EB;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (&#x395;&#x3BB;&#x3BB;&#x3AC;&#x3B4;&#x3B1;)
        </option>
        <option value="85">
          &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
          (Kalaallit Nunaat)
        </option>
        <option value="86">
          &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10D0;&#x10D3;&#x10D0; (Grenada)
        </option>
        <option value="87">
          &#x10D2;&#x10D5;&#x10D0;&#x10D3;&#x10D4;&#x10DA;&#x10E3;&#x10DE;&#x10D0;
          (Guadeloupe)
        </option>
        <option value="88">
          &#x10D2;&#x10E3;&#x10D0;&#x10DB;&#x10D8; (Guam)
        </option>
        <option value="89">
          &#x10D2;&#x10D5;&#x10D0;&#x10E2;&#x10D4;&#x10DB;&#x10D0;&#x10DA;&#x10D0;
          (Guatemala)
        </option>
        <option value="90">
          &#x10D2;&#x10D4;&#x10E0;&#x10DC;&#x10E1;&#x10D8; (Guernsey)
        </option>
        <option value="91">
          &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0; (Guin&#xE9;e)
        </option>
        <option value="92">
          &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0;-&#x10D1;&#x10D8;&#x10E1;&#x10D0;&#x10E3;
          (Guin&#xE9;-Bissau)
        </option>
        <option value="93">
          &#x10D2;&#x10D0;&#x10D8;&#x10D0;&#x10DC;&#x10D0; (Guyana)
        </option>
        <option value="94">
          &#x10F0;&#x10D0;&#x10D8;&#x10E2;&#x10D8; (Haiti)
        </option>
        <option value="95">
          &#x10F0;&#x10D4;&#x10E0;&#x10D3;&#x10D8; &#x10D3;&#x10D0;
          &#x10DB;&#x10D0;&#x10D9;&#x10D3;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10D3;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Heard &amp; McDonald Islands)
        </option>
        <option value="96">
          &#x10E5;&#x10D0;&#x10DA;&#x10D0;&#x10E5;&#x10D8;
          &#x10D5;&#x10D0;&#x10E2;&#x10D8;&#x10D9;&#x10D0;&#x10DC;&#x10D8;
          (Citt&#xE0; del Vaticano)
        </option>
        <option value="97">
          &#x10F0;&#x10DD;&#x10DC;&#x10D3;&#x10E3;&#x10E0;&#x10D0;&#x10E1;&#x10D8;
          (Honduras)
        </option>
        <option value="98">
          &#x10F0;&#x10DD;&#x10DC;&#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10D8;
          (&#x9999;&#x6E2F;)
        </option>
        <option value="99">
          &#x10E3;&#x10DC;&#x10D2;&#x10E0;&#x10D4;&#x10D7;&#x10D8;
          (Magyarorsz&#xE1;g)
        </option>
        <option value="100">
          &#x10D8;&#x10E1;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
          (&#xCD;sland)
        </option>
        <option value="101">
          &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10D4;&#x10D7;&#x10D8;
          (&#x92D;&#x93E;&#x930;&#x924;)
        </option>
        <option value="102">
          &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
          (Indonesia)
        </option>
        <option value="103">
          &#x10D8;&#x10E0;&#x10D0;&#x10DC;&#x10D8;
          (&#x202B;&#x627;&#x6CC;&#x631;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="104">
          &#x10D4;&#x10E0;&#x10D0;&#x10E7;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x639;&#x631;&#x627;&#x642;&#x202C;&#x200E;)
        </option>
        <option value="106">
          &#x10DB;&#x10D4;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8; (Isle of Man)
        </option>
        <option value="107">
          &#x10D8;&#x10E1;&#x10E0;&#x10D0;&#x10D4;&#x10DA;&#x10D8;
          (&#x202B;&#x5D9;&#x5E9;&#x5E8;&#x5D0;&#x5DC;&#x202C;&#x200E;)
        </option>
        <option value="108">
          &#x10D8;&#x10E2;&#x10D0;&#x10DA;&#x10D8;&#x10D0; (Italia)
        </option>
        <option value="109">
          &#x10D8;&#x10D0;&#x10DB;&#x10D0;&#x10D8;&#x10D9;&#x10D0; (Jamaica)
        </option>
        <option value="110">
          &#x10D8;&#x10D0;&#x10DE;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
          (&#x65E5;&#x672C;)
        </option>
        <option value="111">
          &#x10EF;&#x10D4;&#x10E0;&#x10E1;&#x10D8; (Jersey)
        </option>
        <option value="112">
          &#x10D8;&#x10DD;&#x10E0;&#x10D3;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
          (&#x202B;&#x627;&#x644;&#x623;&#x631;&#x62F;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="113">
          &#x10E7;&#x10D0;&#x10D6;&#x10D0;&#x10EE;&#x10D4;&#x10D7;&#x10D8;
          (&#x41A;&#x430;&#x437;&#x430;&#x445;&#x441;&#x442;&#x430;&#x43D;)
        </option>
        <option value="114">
          &#x10D9;&#x10D4;&#x10DC;&#x10D8;&#x10D0; (Kenya)
        </option>
        <option value="115">
          &#x10D9;&#x10D8;&#x10E0;&#x10D8;&#x10D1;&#x10D0;&#x10E2;&#x10D8;
          (Kiribati)
        </option>
        <option value="116">
          &#x10E9;&#x10E0;&#x10D3;&#x10D8;&#x10DA;&#x10DD;&#x10D4;&#x10D7;
          &#x10D9;&#x10DD;&#x10E0;&#x10D4;&#x10D0; (&#xBD81;&#xD55C;)
        </option>
        <option value="117">
          &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
          &#x10D9;&#x10DD;&#x10E0;&#x10D4;&#x10D0;
          (&#xB300;&#xD55C;&#xBBFC;&#xAD6D;)
        </option>
        <option value="118">
          &#x10E5;&#x10E3;&#x10D5;&#x10D4;&#x10D8;&#x10D7;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x643;&#x648;&#x64A;&#x62A;&#x202C;&#x200E;)
        </option>
        <option value="119">
          &#x10E7;&#x10D8;&#x10E0;&#x10D2;&#x10D8;&#x10D6;&#x10D4;&#x10D7;&#x10D8;
          (&#x41A;&#x44B;&#x440;&#x433;&#x44B;&#x437;&#x441;&#x442;&#x430;&#x43D;)
        </option>
        <option value="120">
          &#x10DA;&#x10D0;&#x10DD;&#x10E1;&#x10D8; (&#xEA5;&#xEB2;&#xEA7;)
        </option>
        <option value="121">
          &#x10DA;&#x10D0;&#x10E2;&#x10D5;&#x10D8;&#x10D0; (Latvija)
        </option>
        <option value="122">
          &#x10DA;&#x10D8;&#x10D1;&#x10D0;&#x10DC;&#x10D8;
          (&#x202B;&#x644;&#x628;&#x646;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="123">
          &#x10DA;&#x10D4;&#x10E1;&#x10DD;&#x10D7;&#x10DD; (Lesotho)
        </option>
        <option value="124">
          &#x10DA;&#x10D8;&#x10D1;&#x10D4;&#x10E0;&#x10D8;&#x10D0; (Liberia)
        </option>
        <option value="125">
          &#x10DA;&#x10D8;&#x10D1;&#x10D8;&#x10D0;
          (&#x202B;&#x644;&#x64A;&#x628;&#x64A;&#x627;&#x202C;&#x200E;)
        </option>
        <option value="126">
          &#x10DA;&#x10D8;&#x10EE;&#x10E2;&#x10D4;&#x10DC;&#x10E8;&#x10E2;&#x10D0;&#x10D8;&#x10DC;&#x10D8;
          (Liechtenstein)
        </option>
        <option value="127">
          &#x10DA;&#x10D8;&#x10E2;&#x10D5;&#x10D0; (Lietuva)
        </option>
        <option value="128">
          &#x10DA;&#x10E3;&#x10E5;&#x10E1;&#x10D4;&#x10DB;&#x10D1;&#x10E3;&#x10E0;&#x10D2;&#x10D8;
          (Luxembourg)
        </option>
        <option value="129">
          &#x10DB;&#x10D0;&#x10D9;&#x10D0;&#x10DD; (&#x6FB3;&#x9580;)
        </option>
        <option value="130">
          &#x10DB;&#x10D0;&#x10D9;&#x10D4;&#x10D3;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
          (&#x41C;&#x430;&#x43A;&#x435;&#x434;&#x43E;&#x43D;&#x438;&#x458;&#x430;)
        </option>
        <option value="131">
          &#x10DB;&#x10D0;&#x10D3;&#x10D0;&#x10D2;&#x10D0;&#x10E1;&#x10D9;&#x10D0;&#x10E0;&#x10D8;
          (Madagasikara)
        </option>
        <option value="132">
          &#x10DB;&#x10D0;&#x10DA;&#x10D0;&#x10D5;&#x10D8; (Malawi)
        </option>
        <option value="133">
          &#x10DB;&#x10D0;&#x10DA;&#x10D0;&#x10D8;&#x10D6;&#x10D8;&#x10D0;
          (Malaysia)
        </option>
        <option value="134">
          &#x10DB;&#x10D0;&#x10DA;&#x10D3;&#x10D8;&#x10D5;&#x10D4;&#x10D1;&#x10D8;
          (Maldives)
        </option>
        <option value="135">&#x10DB;&#x10D0;&#x10DA;&#x10D8; (Mali)</option>
        <option value="136">
          &#x10DB;&#x10D0;&#x10DA;&#x10E2;&#x10D0; (Malta)
        </option>
        <option value="137">
          &#x10DB;&#x10D0;&#x10E0;&#x10E8;&#x10D0;&#x10DA;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Marshall Islands)
        </option>
        <option value="138">
          &#x10DB;&#x10D0;&#x10E0;&#x10E2;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D0;
          (Martinique)
        </option>
        <option value="139">
          &#x10DB;&#x10D0;&#x10D5;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
          (&#x202B;&#x645;&#x648;&#x631;&#x64A;&#x62A;&#x627;&#x646;&#x64A;&#x627;&#x202C;&#x200E;)
        </option>
        <option value="140">
          &#x10DB;&#x10D0;&#x10D5;&#x10E0;&#x10D8;&#x10D9;&#x10D8; (Moris)
        </option>
        <option value="141">
          &#x10DB;&#x10D0;&#x10D8;&#x10DD;&#x10E2;&#x10D0; (Mayotte)
        </option>
        <option value="142">
          &#x10DB;&#x10D4;&#x10E5;&#x10E1;&#x10D8;&#x10D9;&#x10D0; (M&#xE9;xico)
        </option>
        <option value="143">
          &#x10DB;&#x10D8;&#x10D9;&#x10E0;&#x10DD;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
          (Micronesia)
        </option>
        <option value="144">
          &#x10DB;&#x10DD;&#x10DA;&#x10D3;&#x10DD;&#x10D5;&#x10D0; (Republica
          Moldova)
        </option>
        <option value="145">
          &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10D9;&#x10DD; (Monaco)
        </option>
        <option value="146">
          &#x10DB;&#x10DD;&#x10DC;&#x10E6;&#x10DD;&#x10DA;&#x10D4;&#x10D7;&#x10D8;
          (&#x41C;&#x43E;&#x43D;&#x433;&#x43E;&#x43B;)
        </option>
        <option value="147">
          &#x10DB;&#x10DD;&#x10DC;&#x10E2;&#x10D4;&#x10DC;&#x10D4;&#x10D2;&#x10E0;&#x10DD;
          (Crna Gora)
        </option>
        <option value="148">
          &#x10DB;&#x10DD;&#x10DC;&#x10E1;&#x10D4;&#x10E0;&#x10D0;&#x10E2;&#x10D8;
          (Montserrat)
        </option>
        <option value="149">
          &#x10DB;&#x10D0;&#x10E0;&#x10DD;&#x10D9;&#x10DD; (Morocco)
        </option>
        <option value="150">
          &#x10DB;&#x10DD;&#x10D6;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D9;&#x10D8;
          (Mo&#xE7;ambique)
        </option>
        <option value="151">
          &#x10DB;&#x10D8;&#x10D0;&#x10DC;&#x10DB;&#x10D0;&#x10E0;&#x10D8;
          (&#x10D1;&#x10D8;&#x10E0;&#x10DB;&#x10D0;)
          (&#x1019;&#x103C;&#x1014;&#x103A;&#x1019;&#x102C;)
        </option>
        <option value="152">
          &#x10DC;&#x10D0;&#x10DB;&#x10D8;&#x10D1;&#x10D8;&#x10D0;
          (Namibi&#xEB;)
        </option>
        <option value="153">
          &#x10DC;&#x10D0;&#x10E3;&#x10E0;&#x10E3; (Nauru)
        </option>
        <option value="154">
          &#x10DC;&#x10D4;&#x10DE;&#x10D0;&#x10DA;&#x10D8;
          (&#x928;&#x947;&#x92A;&#x93E;&#x932;)
        </option>
        <option value="155">
          &#x10DC;&#x10D8;&#x10D3;&#x10D4;&#x10E0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D4;&#x10D1;&#x10D8;
          (Nederland)
        </option>
        <option value="156"></option>
        <option value="157">
          &#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
          &#x10D9;&#x10D0;&#x10DA;&#x10D4;&#x10D3;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
          (Nouvelle-Cal&#xE9;donie)
        </option>
        <option value="159">
          &#x10DC;&#x10D8;&#x10D9;&#x10D0;&#x10E0;&#x10D0;&#x10D2;&#x10E3;&#x10D0;
          (Nicaragua)
        </option>
        <option value="160">
          &#x10DC;&#x10D8;&#x10D2;&#x10D4;&#x10E0;&#x10D8; (Nijar)
        </option>
        <option value="161">
          &#x10DC;&#x10D8;&#x10D2;&#x10D4;&#x10E0;&#x10D8;&#x10D0; (Nigeria)
        </option>
        <option value="162">&#x10DC;&#x10D8;&#x10E3;&#x10D4; (Niue)</option>
        <option value="163">
          &#x10DC;&#x10DD;&#x10E0;&#x10E4;&#x10DD;&#x10DA;&#x10D9;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8; (Norfolk
          Island)
        </option>
        <option value="164">
          &#x10E9;&#x10E0;&#x10D3;&#x10D8;&#x10DA;&#x10DD;&#x10D4;&#x10D7;
          &#x10DB;&#x10D0;&#x10E0;&#x10D8;&#x10D0;&#x10DC;&#x10D0;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Northern Mariana Islands)
        </option>
        <option value="165">
          &#x10DC;&#x10DD;&#x10E0;&#x10D5;&#x10D4;&#x10D2;&#x10D8;&#x10D0;
          (Norge)
        </option>
        <option value="166">
          &#x10DD;&#x10DB;&#x10D0;&#x10DC;&#x10D8;
          (&#x202B;&#x639;&#x64F;&#x645;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="167">
          &#x10DE;&#x10D0;&#x10D9;&#x10D8;&#x10E1;&#x10E2;&#x10D0;&#x10DC;&#x10D8;
          (&#x202B;&#x67E;&#x627;&#x6A9;&#x633;&#x62A;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="168">
          &#x10DE;&#x10D0;&#x10DA;&#x10D0;&#x10E3; (Palau)
        </option>
        <option value="169">
          &#x10DE;&#x10D0;&#x10DA;&#x10D4;&#x10E1;&#x10E2;&#x10D8;&#x10DC;&#x10D0;
          (&#x202B;&#x641;&#x644;&#x633;&#x637;&#x64A;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="170">
          &#x10DE;&#x10D0;&#x10DC;&#x10D0;&#x10DB;&#x10D0; (Panam&#xE1;)
        </option>
        <option value="171">
          &#x10DE;&#x10D0;&#x10DE;&#x10E3;&#x10D0;-&#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
          &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0; (Papua New Guinea)
        </option>
        <option value="172">
          &#x10DE;&#x10D0;&#x10E0;&#x10D0;&#x10D2;&#x10D5;&#x10D0;&#x10D8;
          (Paraguay)
        </option>
        <option value="173">
          &#x10DE;&#x10D4;&#x10E0;&#x10E3; (Per&#xFA;)
        </option>
        <option value="174">
          &#x10E4;&#x10D8;&#x10DA;&#x10D8;&#x10DE;&#x10D8;&#x10DC;&#x10D4;&#x10D1;&#x10D8;
          (Philippines)
        </option>
        <option value="175">
          &#x10DE;&#x10D8;&#x10E2;&#x10D9;&#x10D4;&#x10E0;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Pitcairn Islands)
        </option>
        <option value="176">
          &#x10DE;&#x10DD;&#x10DA;&#x10DD;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Polska)
        </option>
        <option value="177">
          &#x10DE;&#x10DD;&#x10E0;&#x10E2;&#x10E3;&#x10D2;&#x10D0;&#x10DA;&#x10D8;&#x10D0;
          (Portugal)
        </option>
        <option value="178">
          &#x10DE;&#x10E3;&#x10D4;&#x10E0;&#x10E2;&#x10DD;-&#x10E0;&#x10D8;&#x10D9;&#x10DD;
          (Puerto Rico)
        </option>
        <option value="179">
          &#x10D9;&#x10D0;&#x10E2;&#x10D0;&#x10E0;&#x10D8;
          (&#x202B;&#x642;&#x637;&#x631;&#x202C;&#x200E;)
        </option>
        <option value="180">
          &#x10E0;&#x10D4;&#x10E3;&#x10DC;&#x10D8;&#x10DD;&#x10DC;&#x10D8; (La
          R&#xE9;union)
        </option>
        <option value="181">
          &#x10E0;&#x10E3;&#x10DB;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Rom&#xE2;nia)
        </option>
        <option value="182">
          &#x10E0;&#x10E3;&#x10E1;&#x10D4;&#x10D7;&#x10D8;
          (&#x420;&#x43E;&#x441;&#x441;&#x438;&#x44F;)
        </option>
        <option value="183">
          &#x10E0;&#x10E3;&#x10D0;&#x10DC;&#x10D3;&#x10D0; (Rwanda)
        </option>
        <option value="184">
          &#x10EC;&#x10DB;&#x10D8;&#x10DC;&#x10D3;&#x10D0;
          &#x10D4;&#x10DA;&#x10D4;&#x10DC;&#x10D4;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8; (St. Helena)
        </option>
        <option value="185">
          &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10D9;&#x10D8;&#x10E2;&#x10E1;&#x10D8;
          &#x10D3;&#x10D0; &#x10DC;&#x10D4;&#x10D5;&#x10D8;&#x10E1;&#x10D8; (St.
          Kitts &amp; Nevis)
        </option>
        <option value="186">
          &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10DA;&#x10E3;&#x10E1;&#x10D8;&#x10D0;
          (St. Lucia)
        </option>
        <option value="187">
          &#x10E1;&#x10D4;&#x10DC;-&#x10DE;&#x10D8;&#x10D4;&#x10E0;&#x10D8;
          &#x10D3;&#x10D0;
          &#x10DB;&#x10D8;&#x10D9;&#x10D4;&#x10DA;&#x10DD;&#x10DC;&#x10D8;
          (Saint-Pierre-et-Miquelon)
        </option>
        <option value="188">
          &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10D5;&#x10D8;&#x10DC;&#x10E1;&#x10D4;&#x10DC;&#x10E2;&#x10D8;
          &#x10D3;&#x10D0;
          &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10D0;&#x10D3;&#x10D8;&#x10DC;&#x10D4;&#x10D1;&#x10D8;
          (St. Vincent &amp; Grenadines)
        </option>
        <option value="189">
          &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10D0; (Samoa)
        </option>
        <option value="190">
          &#x10E1;&#x10D0;&#x10DC;-&#x10DB;&#x10D0;&#x10E0;&#x10D8;&#x10DC;&#x10DD;
          (San Marino)
        </option>
        <option value="191">
          &#x10E1;&#x10D0;&#x10DC;-&#x10E2;&#x10DD;&#x10DB;&#x10D4;
          &#x10D3;&#x10D0;
          &#x10DE;&#x10E0;&#x10D8;&#x10DC;&#x10E1;&#x10D8;&#x10DE;&#x10D8;
          (S&#xE3;o Tom&#xE9; e Pr&#xED;ncipe)
        </option>
        <option value="192">
          &#x10E1;&#x10D0;&#x10E3;&#x10D3;&#x10D8;&#x10E1;
          &#x10D0;&#x10E0;&#x10D0;&#x10D1;&#x10D4;&#x10D7;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x645;&#x645;&#x644;&#x643;&#x629;
          &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;
          &#x627;&#x644;&#x633;&#x639;&#x648;&#x62F;&#x64A;&#x629;&#x202C;&#x200E;)
        </option>
        <option value="193">
          &#x10E1;&#x10D4;&#x10DC;&#x10D4;&#x10D2;&#x10D0;&#x10DA;&#x10D8;
          (Senegal)
        </option>
        <option value="194">
          &#x10E1;&#x10D4;&#x10E0;&#x10D1;&#x10D4;&#x10D7;&#x10D8;
          (&#x421;&#x440;&#x431;&#x438;&#x458;&#x430;)
        </option>
        <option value="195">
          &#x10E1;&#x10D4;&#x10D8;&#x10E8;&#x10D4;&#x10DA;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Seychelles)
        </option>
        <option value="196">
          &#x10E1;&#x10D8;&#x10D4;&#x10E0;&#x10D0;-&#x10DA;&#x10D4;&#x10DD;&#x10DC;&#x10D4;
          (Sierra Leone)
        </option>
        <option value="197">
          &#x10E1;&#x10D8;&#x10DC;&#x10D2;&#x10D0;&#x10DE;&#x10E3;&#x10E0;&#x10D8;
          (Singapore)
        </option>
        <option value="198">
          &#x10E1;&#x10DA;&#x10DD;&#x10D5;&#x10D0;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
          (Slovensko)
        </option>
        <option value="199">
          &#x10E1;&#x10DA;&#x10DD;&#x10D5;&#x10D4;&#x10DC;&#x10D8;&#x10D0;
          (Slovenija)
        </option>
        <option value="200">
          &#x10E1;&#x10DD;&#x10DA;&#x10DD;&#x10DB;&#x10DD;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Solomon Islands)
        </option>
        <option value="201">
          &#x10E1;&#x10DD;&#x10DB;&#x10D0;&#x10DA;&#x10D8; (Soomaaliya)
        </option>
        <option value="203">
          &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
          &#x10EF;&#x10DD;&#x10E0;&#x10EF;&#x10D8;&#x10D0; &#x10D3;&#x10D0;
          &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
          &#x10E1;&#x10D4;&#x10DC;&#x10D3;&#x10D5;&#x10D8;&#x10E9;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (South Georgia &amp; South Sandwich Islands)
        </option>
        <option value="204">
          &#x10D4;&#x10E1;&#x10DE;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Espa&#xF1;a)
        </option>
        <option value="205">
          &#x10E8;&#x10E0;&#x10D8;-&#x10DA;&#x10D0;&#x10DC;&#x10D9;&#x10D0;
          (&#xDC1;&#xDCA;&#x200D;&#xDBB;&#xDD3;
          &#xDBD;&#xD82;&#xD9A;&#xDCF;&#xDC0;)
        </option>
        <option value="206">
          &#x10E1;&#x10E3;&#x10D3;&#x10D0;&#x10DC;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x633;&#x648;&#x62F;&#x627;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="207">
          &#x10E1;&#x10E3;&#x10E0;&#x10D8;&#x10DC;&#x10D0;&#x10DB;&#x10D8;
          (Suriname)
        </option>
        <option value="208">
          &#x10E8;&#x10DE;&#x10D8;&#x10EA;&#x10D1;&#x10D4;&#x10E0;&#x10D2;&#x10D4;&#x10DC;&#x10D8;
          &#x10D3;&#x10D0;
          &#x10D8;&#x10D0;&#x10DC;-&#x10DB;&#x10D0;&#x10D8;&#x10D4;&#x10DC;&#x10D8;
          (Svalbard og Jan Mayen)
        </option>
        <option value="209">
          &#x10E1;&#x10D5;&#x10D0;&#x10D6;&#x10D8;&#x10DA;&#x10D4;&#x10DC;&#x10D3;&#x10D8;
          (Swaziland)
        </option>
        <option value="210">
          &#x10E8;&#x10D5;&#x10D4;&#x10D3;&#x10D4;&#x10D7;&#x10D8; (Sverige)
        </option>
        <option value="211">
          &#x10E8;&#x10D5;&#x10D4;&#x10D8;&#x10EA;&#x10D0;&#x10E0;&#x10D8;&#x10D0;
          (Schweiz)
        </option>
        <option value="212">
          &#x10E1;&#x10D8;&#x10E0;&#x10D8;&#x10D0;
          (&#x202B;&#x633;&#x648;&#x631;&#x64A;&#x627;&#x202C;&#x200E;)
        </option>
        <option value="213">
          &#x10E2;&#x10D0;&#x10D8;&#x10D5;&#x10D0;&#x10DC;&#x10D8;
          (&#x53F0;&#x7063;)
        </option>
        <option value="214">
          &#x10E2;&#x10D0;&#x10EF;&#x10D8;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
          (Tajikistan)
        </option>
        <option value="215">
          &#x10E2;&#x10D0;&#x10DC;&#x10D6;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
          (Tanzania)
        </option>
        <option value="216">
          &#x10E2;&#x10D0;&#x10D8;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;
          (&#xE44;&#xE17;&#xE22;)
        </option>
        <option value="217">
          &#x10E2;&#x10D8;&#x10DB;&#x10DD;&#x10E0;-&#x10DA;&#x10D4;&#x10E1;&#x10E2;&#x10D4;
          (Timor-Leste)
        </option>
        <option value="218">&#x10E2;&#x10DD;&#x10D2;&#x10DD; (Togo)</option>
        <option value="219">
          &#x10E2;&#x10DD;&#x10D9;&#x10D4;&#x10DA;&#x10D0;&#x10E3; (Tokelau)
        </option>
        <option value="220">
          &#x10E2;&#x10DD;&#x10DC;&#x10D2;&#x10D0; (Tonga)
        </option>
        <option value="221">
          &#x10E2;&#x10E0;&#x10D8;&#x10DC;&#x10D8;&#x10D3;&#x10D0;&#x10D3;&#x10D8;
          &#x10D3;&#x10D0; &#x10E2;&#x10DD;&#x10D1;&#x10D0;&#x10D2;&#x10DD;
          (Trinidad &amp; Tobago)
        </option>
        <option value="222">
          &#x10E2;&#x10E3;&#x10DC;&#x10D8;&#x10E1;&#x10D8; (Tunisia)
        </option>
        <option value="223">
          &#x10D7;&#x10E3;&#x10E0;&#x10E5;&#x10D4;&#x10D7;&#x10D8;
          (T&#xFC;rkiye)
        </option>
        <option value="224">
          &#x10D7;&#x10E3;&#x10E0;&#x10E5;&#x10DB;&#x10D4;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
          (Turkmenistan)
        </option>
        <option value="225">
          &#x10D7;&#x10D4;&#x10E0;&#x10E5;&#x10E1;-&#x10E5;&#x10D0;&#x10D8;&#x10E5;&#x10DD;&#x10E1;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (Turks &amp; Caicos Islands)
        </option>
        <option value="226">
          &#x10E2;&#x10E3;&#x10D5;&#x10D0;&#x10DA;&#x10E3; (Tuvalu)
        </option>
        <option value="227">
          &#x10E3;&#x10D2;&#x10D0;&#x10DC;&#x10D3;&#x10D0; (Uganda)
        </option>
        <option value="228">
          &#x10E3;&#x10D9;&#x10E0;&#x10D0;&#x10D8;&#x10DC;&#x10D0;
          (&#x423;&#x43A;&#x440;&#x430;&#x457;&#x43D;&#x430;)
        </option>
        <option value="229">
          &#x10D0;&#x10E0;&#x10D0;&#x10D1;&#x10D7;&#x10D0;
          &#x10D2;&#x10D0;&#x10D4;&#x10E0;&#x10D7;&#x10D8;&#x10D0;&#x10DC;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
          &#x10E1;&#x10D0;&#x10D0;&#x10DB;&#x10D8;&#x10E0;&#x10DD;&#x10D4;&#x10D1;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x625;&#x645;&#x627;&#x631;&#x627;&#x62A;
          &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;
          &#x627;&#x644;&#x645;&#x62A;&#x62D;&#x62F;&#x629;&#x202C;&#x200E;)
        </option>
        <option value="232">
          &#x10D0;&#x10E8;&#x10E8;-&#x10D8;&#x10E1;
          &#x10E8;&#x10DD;&#x10E0;&#x10D4;&#x10E3;&#x10DA;&#x10D8;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (U.S. Outlying Islands)
        </option>
        <option value="233">
          &#x10E3;&#x10E0;&#x10E3;&#x10D2;&#x10D5;&#x10D0;&#x10D8; (Uruguay)
        </option>
        <option value="234">
          &#x10E3;&#x10D6;&#x10D1;&#x10D4;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
          (O&#x2BB;zbekiston)
        </option>
        <option value="235">
          &#x10D5;&#x10D0;&#x10DC;&#x10E3;&#x10D0;&#x10E2;&#x10E3; (Vanuatu)
        </option>
        <option value="237">
          &#x10D5;&#x10D4;&#x10DC;&#x10D4;&#x10E1;&#x10E3;&#x10D4;&#x10DA;&#x10D0;
          (Venezuela)
        </option>
        <option value="238">
          &#x10D5;&#x10D8;&#x10D4;&#x10E2;&#x10DC;&#x10D0;&#x10DB;&#x10D8;
          (Vi&#x1EC7;t Nam)
        </option>
        <option value="239">
          &#x10D1;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
          &#x10D5;&#x10D8;&#x10E0;&#x10EF;&#x10D8;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (British Virgin Islands)
        </option>
        <option value="240">
          &#x10D0;&#x10E8;&#x10E8;-&#x10D8;&#x10E1;
          &#x10D5;&#x10D8;&#x10E0;&#x10EF;&#x10D8;&#x10DC;&#x10D8;&#x10E1;
          &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
          (U.S. Virgin Islands)
        </option>
        <option value="241">
          &#x10E3;&#x10DD;&#x10DA;&#x10D8;&#x10E1;&#x10D8; &#x10D3;&#x10D0;
          &#x10E4;&#x10E3;&#x10E2;&#x10E3;&#x10DC;&#x10D0; (Wallis &amp; Futuna)
        </option>
        <option value="242">
          &#x10D3;&#x10D0;&#x10E1;&#x10D0;&#x10D5;&#x10DA;&#x10D4;&#x10D7;
          &#x10E1;&#x10D0;&#x10F0;&#x10D0;&#x10E0;&#x10D0;
          (&#x202B;&#x627;&#x644;&#x635;&#x62D;&#x631;&#x627;&#x621;
          &#x627;&#x644;&#x63A;&#x631;&#x628;&#x64A;&#x629;&#x202C;&#x200E;)
        </option>
        <option value="243">
          &#x10D8;&#x10D4;&#x10DB;&#x10D4;&#x10DC;&#x10D8;
          (&#x202B;&#x627;&#x644;&#x64A;&#x645;&#x646;&#x202C;&#x200E;)
        </option>
        <option value="245">
          &#x10D6;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D0; (Zambia)
        </option>
        <option value="246">
          &#x10D6;&#x10D8;&#x10DB;&#x10D1;&#x10D0;&#x10D1;&#x10D5;&#x10D4;
          (Zimbabwe)
        </option>
        <option value="495">
          &#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;&#x10D1;&#x10D0;
          &#x10D3;&#x10D8;&#x10E1;&#x10E2;&#x10D0;&#x10DC;&#x10EA;&#x10D8;&#x10E3;&#x10E0;&#x10D0;&#x10D3;
        </option>
      </select>
    </>
  );
};

export default CountrySelect;
